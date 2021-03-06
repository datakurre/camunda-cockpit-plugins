import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import HistoricFilterBox from './Components/HistoricFilterBox';
import Portal from './Components/Portal';
import StatisticsTable from './Components/StatisticsTable';
import { DefinitionPluginParams } from './types';
import { get } from './utils/api';
import { filter } from './utils/misc';

const initialState: Record<string, any> = {
  viewer: null,
  statistics: null,
};

const hooks: Record<string, any> = {
  setViewer: (viewer: any) => (initialState.viewer = viewer),
  setStatistics: (node: Element) => (initialState.statistics = node),
};

const Plugin: React.FC<DefinitionPluginParams> = ({ api, processDefinitionId }) => {
  const [query, setQuery] = useState({} as Record<string, string>);
  const [viewer, setViewer] = useState(initialState.viewer);
  const [statistics, setStatistics] = useState(initialState.statistics);

  hooks.setViewer = setViewer;
  hooks.setStatistics = setStatistics;

  const [activities, setActivities]: any = useState([] as any[]);
  const [badges, setBadges] = useState([] as Element[]);

  // FETCH

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      (async () => {
        const definition = await get(api, `/process-definition/${processDefinitionId}`);
        const definitions = await get(api, '/process-definition', { key: definition.key });
        let activities: any[] = [];
        for (const version of definitions) {
          console.log(query);
          const batch = await get(api, '/history/activity-instance', {
            ...query,
            processDefinitionId: version.id,
          });
          activities = activities.concat(batch);
        }
        setActivities(activities);
      })();
    }
  }, [query]);

  // Overlay

  useEffect(() => {
    for (const badge of badges) {
      badge.parentElement?.removeChild(badge);
    }

    if (viewer && activities.length) {
      const overlays = viewer.get('overlays');
      const update: Element[] = [];
      const counter: Record<string, number> = {};
      for (const activity of activities) {
        const id = activity.activityId;
        counter[id] = counter[id] ? counter[id] + 1 : 1;
      }

      const seen: Record<string, boolean> = {};
      for (const activity of activities) {
        const id = activity.activityId;
        if (seen[id]) {
          continue;
        } else {
          seen[id] = true;
        }

        const overlay = document.createElement('span');
        overlay.innerText = `${counter[id]}`;
        overlay.className = 'badge';
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
          update.push(overlay);
        } catch (e) {}
      }
      setBadges(update);
    }
  }, [viewer, activities]);

  // Tabs

  return (
    <Portal node={statistics}>
      <HistoricFilterBox onChange={setQuery} />
      {statistics && activities.length ? (
        <StatisticsTable activities={filter(activities, activity => activity.activityName && activity.endTime)} />
      ) : null}
    </Portal>
  );
};

export default [
  {
    id: 'definitionHistoricActivitiesDiagramBadges',
    pluginPoint: 'cockpit.processDefinition.diagram.plugin',
    render: (viewer: any) => hooks.setViewer(viewer),
  },
  {
    id: 'definitionHistoricActivitiesStatisticsTab',
    pluginPoint: 'cockpit.processDefinition.runtime.tab',
    properties: {
      label: 'Statistics',
    },
    render: (node: Element) => hooks.setStatistics(node),
  },
  {
    id: 'definitionHistoricActivitiesPlugin',
    pluginPoint: 'cockpit.processDefinition.runtime.action',
    render: (node: Element, { api, processDefinitionId }: DefinitionPluginParams) => {
      ReactDOM.render(
        <React.StrictMode>
          <Plugin api={api} processDefinitionId={processDefinitionId} />
        </React.StrictMode>,
        node
      );
    },
  },
];
