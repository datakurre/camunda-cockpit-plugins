import React from 'react';
import ReactDOM from 'react-dom';

import AuditLogTable from './Components/AuditLogTable';
import { ToggleSequenceFlowButton } from './Components/ToggleSequenceFlowButton';
import { InstancePluginParams, TaskListPluginParams } from './types';
import { get } from './utils/api';
import { clearSequenceFlow, renderSequenceFlow } from './utils/bpmn';

export default [
  {
    id: 'tasklistTabAuditLog',
    pluginPoint: 'tasklist.task.detail',
    properties: {
      label: 'Audit Log',
    },
    render: (node: Element, { api, taskId }: TaskListPluginParams) => {
      (async () => {
        const { processInstanceId } = await get(api, `/task/${taskId}`);
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
