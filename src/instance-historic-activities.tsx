import React from 'react';
import ReactDOM from 'react-dom';

import AuditLogTable from './Components/AuditLogTable';
import { InstancePluginParams } from './types';
import { get } from './utils/api';
import { renderSequenceFlow } from './utils/bpmn';

export default [
  {
    id: 'instanceDiagramHistoricActivities',
    pluginPoint: 'cockpit.processInstance.diagram.plugin',
    render: (viewer: any, { api, processInstanceId }: InstancePluginParams) => {
      (async () => {
        const overlays = viewer.get('overlays');

        const activities = await get(api, '/history/activity-instance', { processInstanceId });

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
          overlays.add(id, {
            position: {
              bottom: 17,
              right: 10,
            },
            html: overlay,
          });
        }
        renderSequenceFlow(viewer, activities ?? []);
      })();
    },
  },
  {
    id: 'instanceTabHistoricActivities',
    pluginPoint: 'cockpit.processInstance.runtime.tab',
    properties: {
      label: 'Audit Log',
    },
    render: (node: Element, { api, processInstanceId }: InstancePluginParams) => {
      (async () => {
        const [activities, decisions] = await Promise.all([
          get(api, '/history/activity-instance', { processInstanceId }),
          get(api, '/history/decision-instance', { processInstanceId }),
        ]);
        const decisionByActivity: Map<string, any> = new Map(
          decisions.map((decision: any) => [decision.activityInstanceId, decision.id])
        );
        activities.sort((a: any, b: any) => {
          a = new Date(a.endTime);
          b = new Date(b.endTime);
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
        ReactDOM.render(
          <React.StrictMode>
            <AuditLogTable activities={activities} decisions={decisionByActivity} />
          </React.StrictMode>,
          node
        );
      })();
    },
  },
];
