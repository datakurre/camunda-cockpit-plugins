import React from 'react';
import ReactDOM from 'react-dom';
import { Field, Form } from 'react-final-form';

import { InstancePluginParams } from './types';
import { post } from './utils/api';

interface MoveToken {
  startActivityId: string;
  cancelActivityId: string;
  annotation: string;
}

const MoveTokenForm: React.FC<InstancePluginParams> = ({ api, processInstanceId }) => {
  const onSubmit = async ({ startActivityId, cancelActivityId, annotation }: MoveToken) => {
    if (startActivityId && cancelActivityId) {
      const payload: any = {
        skipCustomListeners: true,
        skipIoMappings: true,
        instructions: [
          {
            type: 'startBeforeActivity',
            activityId: startActivityId,
            variables: {},
          },
          {
            type: 'cancel',
            activityId: cancelActivityId,
            variables: {},
          },
        ],
        annotation,
      };
      await post(api, `/process-instance/${processInstanceId}/modification`, {}, JSON.stringify(payload));
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: '100%', fontWeight: 'bold' }}>Move token</h2>
          <table className="cam-table">
            <thead>
              <th>
                <label htmlFor="cancelActivityId">From</label>
              </th>
              <th>
                <label htmlFor="startActivityId">To</label>
              </th>
              <th>
                <label htmlFor="annotation">Reason</label>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Field className="form-control" name="cancelActivityId" component="input" />
                </td>
                <td>
                  <Field className="form-control" name="startActivityId" component="input" />
                </td>
                <td>
                  <Field className="form-control" name="annotation" component="input" />
                </td>
                <td>
                  <button type="submit">Move</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Warning! Use with extreme care. This form could be used to terminate process inadvertently.</p>
        </form>
      )}
    />
  );
};

export default [
  {
    id: 'instanceTabModify',
    pluginPoint: 'cockpit.processInstance.runtime.tab',
    properties: {
      label: 'Modify',
    },
    render: (node: Element, { api, processInstanceId }: InstancePluginParams) => {
      (async () => {
        ReactDOM.render(
          <React.StrictMode>
            <MoveTokenForm api={api} processInstanceId={processInstanceId} />
          </React.StrictMode>,
          node
        );
      })();
    },
  },
];
