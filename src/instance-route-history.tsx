import './instance-route-history.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import AuditLogTable from './Components/AuditLogTable';
import BPMN from './Components/BPMN';
import BreadcrumbsPanel from './Components/BreadcrumbsPanel';
import { Clippy } from './Components/Clippy';
import Container from './Components/Container';
import HistoryTable from './Components/HistoryTable';
import Page from './Components/Page';
import VariablesTable from './Components/VariablesTable';
import { DefinitionPluginParams, RoutePluginParams } from './types';
import { get } from './utils/api';

export default [
  {
    id: 'definitionTabHistoricInstances',
    pluginPoint: 'cockpit.processDefinition.runtime.tab',
    properties: {
      label: 'History',
    },
    render: (node: Element, { api, processDefinitionId }: DefinitionPluginParams) => {
      (async () => {
        const definition = await get(api, `/process-definition/${processDefinitionId}`);
        const instances = await get(api, '/history/process-instance', {
          processDefinitionKey: definition.key,
          // finished: true,
          sortBy: 'endTime',
          sortOrder: 'desc',
          maxResults: '100',
        });
        ReactDOM.render(
          <React.StrictMode>
            <HistoryTable instances={instances} />
          </React.StrictMode>,
          node
        );
      })();
    },
  },
  {
    id: 'instanceRouteHistory',
    pluginPoint: 'cockpit.route',
    properties: {
      label: '/history',
    },

    render: (node: Element, { api }: RoutePluginParams) => {
      const hash = window?.location?.hash ?? '';
      const match = hash.match(/\/history\/process-instance\/([^\/]*)/);
      const processInstanceId = match ? match[1] : null;
      if (processInstanceId) {
        (async () => {
          const instance = await get(api, `/history/process-instance/${processInstanceId}`);
          const [diagram, activities, variables, decisions] = await Promise.all([
            get(api, `/process-definition/${instance.processDefinitionId}/xml`),
            get(api, '/history/activity-instance', { processInstanceId }),
            get(api, '/history/variable-instance', { processInstanceId }),
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
          variables.sort((a: any, b: any) => {
            a = a.name;
            b = b.name;
            if (a > b) {
              return 1;
            }
            if (a < b) {
              return -1;
            }
            return 0;
          });
          ReactDOM.render(
            <React.StrictMode>
              <Page>
                <BreadcrumbsPanel
                  processDefinitionId={instance.processDefinitionId}
                  processDefinitionName={instance.processDefinitionName}
                  processInstanceId={processInstanceId}
                />
                <Container>
                  <SplitPane split="vertical" size={200}>
                    <div className="ctn-column">
                      <dl className="process-information">
                        <dt>
                          <Clippy value={instance.id}>Instance ID:</Clippy>
                        </dt>
                        <dd>{instance.id}</dd>
                        <dt>
                          <Clippy value={instance.businessKey || 'null'}>Business Key:</Clippy>
                        </dt>
                        <dd>{instance.businessKey || 'null'}</dd>
                        <dt>
                          <Clippy value={instance.processDefinitionVersion}>Definition Version:</Clippy>
                        </dt>
                        <dd>{instance.processDefinitionVersion}</dd>
                        <dt>
                          <Clippy value={instance.processdefinitionid}>Definition ID:</Clippy>
                        </dt>
                        <dd>{instance.processDefinitionId}</dd>
                        <dt>
                          <Clippy value={instance.processDefinitionKey}>Definition Key:</Clippy>
                        </dt>
                        <dd>{instance.processDefinitionKey}</dd>
                        <dt>
                          <Clippy value={instance.processDefinitionName}>Definition Name:</Clippy>
                        </dt>
                        <dd>{instance.processDefinitionName}</dd>
                        <dt>
                          <Clippy value={instance.tenantId || 'null'}>Tenant ID:</Clippy>
                        </dt>
                        <dd>{instance.tenantId || 'null'}</dd>
                        <dt>
                          <Clippy value={instance.superProcessInstanceId}>Super Process instance ID:</Clippy>
                        </dt>
                        <dd>
                          {(instance.superProcessInstanceId && (
                            <a href={`#/history/process-instance/${instance.superProcessInstanceId}`}>
                              {instance.superProcessInstanceId}
                            </a>
                          )) ||
                            'null'}
                        </dd>
                        <dt>
                          <Clippy value={instance.state}>State</Clippy>
                        </dt>
                        <dd>{instance.state}</dd>
                      </dl>
                    </div>
                    <SplitPane split="horizontal" size={300}>
                      <BPMN
                        activities={activities}
                        diagramXML={diagram.bpmn20Xml}
                        className="ctn-content"
                        style={{ width: '100%' }}
                      />
                      <Tabs className="ctn-row ctn-content-bottom ctn-tabbed" selectedTabClassName="active">
                        <TabList className="nav nav-tabs">
                          <Tab>
                            <a>Audit Log</a>
                          </Tab>
                          <Tab>
                            <a>Variables</a>
                          </Tab>
                        </TabList>
                        <TabPanel className="ctn-tabbed-content ctn-scroll">
                          <AuditLogTable activities={activities} decisions={decisionByActivity} />
                        </TabPanel>
                        <TabPanel className="ctn-tabbed-content ctn-scroll">
                          <VariablesTable
                            variables={variables.filter(
                              (variable: any) => variable.activityInstanceId === processInstanceId
                            )}
                          />
                        </TabPanel>
                        <TabPanel></TabPanel>
                      </Tabs>
                    </SplitPane>
                  </SplitPane>
                </Container>
              </Page>
            </React.StrictMode>,
            node
          );
        })();
      }
    },
  },
];
