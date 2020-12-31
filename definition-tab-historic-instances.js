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
  id: "definitionTabHistoricInstances",
  // location where plugin goes
  pluginPoint: "cockpit.processDefinition.runtime.tab",
  // properties
  properties: {
    label: "Completed",
  },
  // what to render, specific objects that you can pass into render function to use
  render: (node, { api, processDefinitionId}) => {
    (async () => {

      const definition = await get(
        api,
        `/process-definition/${processDefinitionId}`,
      );

      const instances = await get(
        api,
        "/history/process-instance",
        { processDefinitionKey: definition.key,
//          finished: true,
          sortBy: "endTime",
          sortOrder: "desc",
          maxResults: 100
        }
      );

      const table = document.createElement('table');
      table.className = "cam-table";
      node.appendChild(table);

      const thead = document.createElement('thead');
      table.appendChild(thead);

      let th;

      th = document.createElement('th');
      th.textContent = "ID";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "End Time";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      th = document.createElement('th');
      th.textContent = "Business Key";
      thead.appendChild(th);
      thead.setAttribute("sortable-table-head", "");

      const tbody = document.createElement('tbody');
      table.appendChild(tbody);

      for (const instance of instances) {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        let td;

        td = document.createElement('td');
        let a  = document.createElement('a');
        a.href = "#/history/process-instance/" + instance.id
        a.textContent = instance.id
        td.appendChild(a);
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = asctime(new Date(instance.endTime));
        row.appendChild(td);

        td = document.createElement('td');
        td.textContent = instance.businessKey;
        row.appendChild(td);
      }

    })();
  },
};
