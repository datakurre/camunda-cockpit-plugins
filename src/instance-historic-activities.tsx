import React from 'react';
import { createRoot } from 'react-dom/client';

import AuditLogTable from './Components/AuditLogTable';
import { ToggleSequenceFlowButton } from './Components/ToggleSequenceFlowButton';
import { InstancePluginParams } from './types';
import { get } from './utils/api';
import { clearSequenceFlow, renderSequenceFlow } from './utils/bpmn';

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
          overlays.add(id.split('#')[0], {
            position: {
              bottom: 17,
              right: 10,
            },
            html: overlay,
          });
        }

        const toggleSequenceFlowButton = document.createElement('div');
        toggleSequenceFlowButton.style.cssText = `
          position: absolute;
          right: 15px;
          top: 15px;
        `;
        viewer._container.appendChild(toggleSequenceFlowButton);
        let sequenceFlow: any[] = [];
        createRoot(toggleSequenceFlowButton!).render(
          <React.StrictMode>
            <ToggleSequenceFlowButton
              onToggleSequenceFlow={(value: boolean) => {
                if (value) {
                  sequenceFlow = renderSequenceFlow(viewer, activities ?? []);
                } else {
                  clearSequenceFlow(sequenceFlow);
                }
              }}
            />
          </React.StrictMode>
        );
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
          a = a.endTime ? new Date(a.endTime) : new Date();
          b = b.endTime ? new Date(b.endTime) : new Date();
          if (a > b) {
            return -1;
          }
          if (a < b) {
            return 1;
          }
          return 0;
        });
        createRoot(node!).render(
          <React.StrictMode>
            <AuditLogTable activities={activities} decisions={decisionByActivity} />
          </React.StrictMode>
        );
      })();
    },
  },
];
