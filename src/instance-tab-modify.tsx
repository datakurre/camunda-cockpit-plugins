import React from 'react';
import ReactDOM from 'react-dom';
import { Field, Form } from 'react-final-form';

import { InstancePluginParams } from './types';
import { post } from './utils/api';

interface Variable {
  name: string;
  value: any;
  type: string;
}

const ModifyVariableForm: React.FC<InstancePluginParams> = ({ api, processInstanceId }) => {
  const onSubmit = async ({ name, value, type }: Variable)=> {
    switch (type) {
      case 'integer':
        value = parseInt(value, 10);
        break;
      case 'boolean':
        value = value === 'true';
        break;
      default:
        type = 'string';
    }
    if (name && type && value !== null && value !== undefined) {
      const payload: any = { modifications: {} };
      payload.modifications[name] = { value, type };
      await post(api, `/process-instance/${processInstanceId}/variables`, {}, JSON.stringify(payload));
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: '100%' }}>Modify variable</h2>
          <table className="cam-table">
            <thead>
              <th>
                <label htmlFor="name">Name</label>
              </th>
              <th>
                <label htmlFor="type">Type</label>
              </th>
              <th>
                <label htmlFor="value">value</label>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Field className="form-control" name="name" component="input" placeholder="Name" />
                </td>
                <td>
                  <Field className="form-control" name="type" component="select" placeholder="Type">
                    <option value="string">string</option>
                    <option value="integer">integer</option>
                    <option value="boolean">boolean</option>
                  </Field>
                </td>
                <td>
                  <Field className="form-control" name="value" component="input" placeholder="Value" />
                </td>
                <td>
                  <button type="submit">Modify</button>
                </td>
              </tr>
            </tbody>
          </table>
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
            <ModifyVariableForm api={api} processInstanceId={processInstanceId} />
          </React.StrictMode>,
          node
        );
      })();
    },
  },
];
