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

export default {
  // id for plugin
  id: "instanceDiagramHistoricActivities",
  // location where plugin goes
  pluginPoint: "cockpit.processInstance.diagram.plugin",
  // what to render, specific objects that you can pass into render function to use
  render: (viewer, { api, processInstanceId}) => {
    (async () => {
      const overlays = viewer.get('overlays');

      const activities = await get(
        api,
        "/history/activity-instance",
        {processInstanceId }
      );

      const counter = {};
      for (const activity of activities) {
        const id = activity.activityId;
        counter[id] = counter[id] ? counter[id] + 1 : 1;
      }

      const seen = {};
      for (const activity of activities) {
        const id = activity.activityId;
        if (seen[id]) {
          continue;
        } else {
          seen[id] = true;
        }

        const overlay = document.createElement('span');
        overlay.innerText = counter[id];
        overlay.className = "badge";
        overlay.style.cssText = `
          background: lightgray;
        `;
        overlays.add(id, {
          position: {
            bottom: 17,
            right: 10,
          },
          html: overlay,
        });
      }
    })();
  },
};
