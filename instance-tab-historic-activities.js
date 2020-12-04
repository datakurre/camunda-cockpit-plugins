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
  id: "instanceTabHistoricActivities",
  // location where plugin goes
  pluginPoint: "cockpit.processInstance.runtime.tab",
  // properties
  properties: {
    label: "Activities",
  },
  // what to render, specific objects that you can pass into render function to use
  render: (node, { api, processInstanceId}) => {
    (async () => {

      const activities = filter(
        await get(
          api,
          "/history/activity-instance",
          {processInstanceId }
        ),
        (activity) => activity.activityName && activity.endTime
      );

      activities.sort((a, b) => {
        a = new Date(a.endTime);
        b = new Date(b.endTime);
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
        return 0;
      });

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
      th.textContent = "Start Date";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "End Date";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Duration";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Type";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Canceled";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      const tbody = document.createElement('tbody');
      table.appendChild(tbody);

      for (const activity of activities) {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        let td;

        td = document.createElement('td');
        td.textContent = activity.activityName;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = activity.startTime.split('.')[0];
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = activity.endTime.split('.')[0];
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = asctime(
          new Date(activity.endTime) - new Date(activity.startTime));
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = activity.activityType;
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = activity.canceled;
        row.appendChild(td);
      }

    })();
  },
};
