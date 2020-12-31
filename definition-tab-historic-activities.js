const headers = (api) => {
  return {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": api.CSRFToken,
  };
};

const get = async (api, path, params) => {
  const query = new URLSearchParams(params || {}).toString()
  const res = await fetch(
    `${api.engineApi}${path}?${query}`,
    {
      method: 'get',
      headers: headers(api),
    },
  );
  return await res.json();
};

const asctime = (duration) => {
  let
    milliseconds = parseInt(`${(duration % 1000) / 100}`, 10),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

const filter = (iterable, condition) => {
  const result = [];
  for (const item of iterable) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
}

export default {
  // id for plugin
  id: "definitionTabHistoricActivities",
  // location where plugin goes
  pluginPoint: "cockpit.processDefinition.runtime.tab",
  // properties
  properties: {
    label: "Activities",
  },
  // what to render, specific objects that you can pass into render function to use
  render: (node, { api, processDefinitionId}) => {
    (async () => {

      const definition = await get(
        api,
        `/process-definition/${processDefinitionId}`,
      );

      const definitions = await get(
        api,
        "/process-definition",
        { key: definition.key }
      );

      let activities = [];
      for (const version of definitions) {
        const batch = await get(
          api,
          "/history/activity-instance",
          {
            sortBy: "endTime",
            sortOrder: "desc",
            maxResults: 100,
            processDefinitionId: version.id,
          }
        );
        activities = activities.concat(batch);
      }
      activities = filter(
        activities,
        (activity) => activity.activityName && activity.endTime
      );

      const counter = {};
      for (const activity of activities) {
        const name = activity.activityName;
        counter[name] = counter[name] ? counter[name] + 1 : 1;
      }

      const table = document.createElement('table');
      table.className = "cam-table";
      node.appendChild(table);

      const thead = document.createElement('thead');
      table.appendChild(thead);

      let th;

      th = document.createElement('th');
      th.textContent = "Activity Name";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Instances";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Duration";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Avarage";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Median";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      const tbody = document.createElement('tbody');
      table.appendChild(tbody);

      const totals = {};
      const durations = {};
      for (const activity of activities) {
        const duration = new Date(activity.endTime) - new Date(activity.startTime);
        totals[activity.activityName] =
          totals[activity.activityName]
          ? totals[activity.activityName] + duration
          : duration;
        if (!durations[activity.activityName]) {
          durations[activity.activityName] = [duration];
        } else {
          durations[activity.activityName].push(duration);
        }
      }

      const activityNames = Object.keys(totals);
      activityNames.sort((a, b) => {
        if (totals[a] > totals[b]) {
          return -1;
        } else if (totals[a] < totals[b]) {
          return 1;
        }
        return 0;
      });

      for (const activityName of activityNames) {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        let td;

        td = document.createElement('td');
        td.textContent = activityName;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = counter[activityName];
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = asctime(totals[activityName]);
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = asctime(totals[activityName] / counter[activityName]);
        row.appendChild(td);

        durations[activityNames].sort((a, b) => {
          if (durations[a] > durations[b]) {
            return -1;
          } else if (durations[a] < durations[b]) {
            return 1;
          }
          return 0;
        });

        td = document.createElement('td');
        td.textContent = asctime(durations[activityName][Math.floor(durations[activityName].length / 2)]);
        row.appendChild(td);
      }

    })();
  },
};
