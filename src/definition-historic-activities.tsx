import React from 'react';
import ReactDOM from 'react-dom';

import StatisticsTable from './Components/StatisticsTable';
import { DefinitionPluginParams } from './types';
import { get } from './utils/api';
import { filter } from './utils/misc';

export default [
  {
    id: 'definitionDiagramHistoricActivities',
    pluginPoint: 'cockpit.processDefinition.diagram.plugin',
    render: (viewer: any, { api, processDefinitionId }: DefinitionPluginParams) => {
      (async () => {
        const overlays = viewer.get('overlays');

        const activities = await get(api, '/history/activity-instance', {
          sortBy: 'endTime',
          sortOrder: 'desc',
          maxResults: '1000',
          processDefinitionId,
        });

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
            overlays.add(id.split('#')[0], {
              position: {
                bottom: 17,
                right: 10,
              },
              html: overlay,
            });
          } catch (e) {}
        }
      })();
    },
  },
  {
    id: 'definitionTabHistoricActivities',
    pluginPoint: 'cockpit.processDefinition.runtime.tab',
    properties: {
      label: 'Statistics',
    },
    render: (node: Element, { api, processDefinitionId }: DefinitionPluginParams) => {
      (async () => {
        const activities = await get(api, '/history/activity-instance', {
          sortBy: 'endTime',
          sortOrder: 'desc',
          maxResults: '1000',
          processDefinitionId,
        });
        const filtered = filter(activities, activity => activity.activityName && activity.endTime);
        ReactDOM.render(
          <React.StrictMode>
            <StatisticsTable activities={filtered} />
          </React.StrictMode>,
          node
        );
      })();
    },
  },
];
