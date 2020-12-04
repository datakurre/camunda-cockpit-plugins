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
  id: "definitionDiagramHistoricActivities",
  // location where plugin goes
  pluginPoint: "cockpit.processDefinition.diagram.plugin",
  // what to render, specific objects that you can pass into render function to use
  render: (viewer, { api, processDefinitionId}) => {
    (async () => {
      window.viewer = viewer;
      const overlays = viewer.get('overlays');

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

      const counter = {};
      for (const activity of activities) {
        const id = activity.activityId;
        counter[id] = counter[id] ? counter[id] + 1 : 1;
      }

      for (const activity of activities) {
        const id = activity.activityId;
        const overlay = document.createElement('span');
        overlay.innerText = counter[id];
        overlay.className = "badge";
        overlay.style.cssText = `
          background: lightgray;
        `;
        try {
          overlays.add(id, {
            position: {
              bottom: 17,
              right: 10,
            },
            html: overlay,
          });
        } catch (e) {
        }
      }
    })();
  },
};
