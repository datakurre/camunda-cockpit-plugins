import './instance-route-history.scss';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Expression, GridDataAutoCompleteHandler } from 'react-filter-box';
import SplitPane from 'react-split-pane';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import AuditLogTable from './Components/AuditLogTable';
import BPMN from './Components/BPMN';
import BreadcrumbsPanel from './Components/BreadcrumbsPanel';
import { Clippy } from './Components/Clippy';
import Container from './Components/Container';
import FilterBox from './Components/FilterBox';
import HistoryTable from './Components/HistoryTable';
import Page from './Components/Page';
import Portal from './Components/Portal';
import { ToggleHistoryViewButton } from './Components/ToggleHistoryViewButton';
import VariablesTable from './Components/VariablesTable';
import { DefinitionPluginParams, RoutePluginParams } from './types';
import { get } from './utils/api';

class InstanceQueryAutoCompleteHandler extends GridDataAutoCompleteHandler {
  query = '';

  setQuery(query: string) {
    this.query = query;
  }

  hasCategory(category: string) {
    return true;
  }

  needCategories(): string[] {
    return super.needCategories().filter((value: string) => !(value === 'key' && this.query.includes(value)));
  }

  needOperators(parsedCategory: string) {
    if (parsedCategory === 'key') {
      return ['==', 'like'];
    }
    return ['==', 'like'];
  }

  needValues(parsedCategory: string, parsedOperator: string) {
    return super.needValues(parsedCategory, parsedOperator);
  }
}

const InstanceQueryOptions = [
  {
    columnField: 'key',
    type: 'string',
  },
];

const initialState: Record<string, any> = {
  historyTabNode: null,
};

const hooks: Record<string, any> = {
  setHistoryTabNode: (node: Element) => (initialState.historyTabNode = node),
};

const Plugin: React.FC<DefinitionPluginParams> = ({ root, api, processDefinitionId }) => {
  const [autoCompleteHandler] = useState(new InstanceQueryAutoCompleteHandler([], InstanceQueryOptions));
  const [expressions, setExpressions] = useState([] as Expression[]);
  const [query, setQuery] = useState({} as Record<string, string | null>);
  const [historyTabNode, setHistoryTabNode] = useState(initialState.historyTabNode);

  hooks.setHistoryTabNode = setHistoryTabNode;

  const [instances, setInstances]: any = useState([] as any[]);

  // FETCH

  useEffect(() => {
    (async () => {
      const instances = await get(api, '/history/process-instance', {
        sortBy: 'endTime',
        sortOrder: 'desc',
        maxResults: '1000',
        processDefinitionId,
        ...query,
      });
      setInstances(instances);
    })();
  }, [query]);

  useEffect(() => {
    const query: any = {};
    const variables = [];
    for (const { category, operator, value } of expressions) {
      if (category === 'key' && operator === '==') {
        query['processInstanceBusinessKey'] = value;
      } else if (category === 'key' && operator === 'like') {
        query['processInstanceBusinessKeyLike'] = value;
      } else if (operator === '==') {
        variables.push(`${category}_eq_${value}`);
      } else if (operator === 'like') {
        variables.push(`${category}_like_${value}`);
      }
    }
    if (variables.length) {
      query['variables'] = variables.join(',');
    }
    setQuery(query);
    console.log(query);
  }, [expressions]);

  // Hack to ensure long living HTML node for filter box
  if (historyTabNode && !Array.from(historyTabNode.children).includes(root)) {
    historyTabNode.appendChild(root);
  }

  return historyTabNode ? (
    <Portal node={root}>
      <FilterBox
        options={InstanceQueryOptions}
        autoCompleteHandler={autoCompleteHandler}
        onParseOk={setExpressions}
        defaultQuery={(): string => ''}
      />
      {instances.length ? <HistoryTable instances={instances} /> : null}
    </Portal>
  ) : null;
};

export default [
  {
    id: 'definitionTabHistoricInstances',
    pluginPoint: 'cockpit.processDefinition.runtime.tab',
    properties: {
      label: 'History',
    },
    render: (node: Element) => hooks.setHistoryTabNode(node),
  },
  {
    id: 'definitionHistoricInstancesPlugin',
    pluginPoint: 'cockpit.processDefinition.runtime.action',
    render: (node: Element, { api, processDefinitionId }: DefinitionPluginParams) => {
      ReactDOM.render(
        <React.StrictMode>
          <Plugin root={node} api={api} processDefinitionId={processDefinitionId} />
        </React.StrictMode>,
        node
      );
    },
  },
  {
    id: 'instanceDiagramHistoricToggle',
    pluginPoint: 'cockpit.processInstance.diagram.plugin',
    render: (viewer: any) => {
      (async () => {
        const buttons = document.createElement('div');
        buttons.style.cssText = `
          position: absolute;
          right: 15px;
          top: 60px;
        `;
        viewer._container.appendChild(buttons);
        ReactDOM.render(
          <React.StrictMode>
            <ToggleHistoryViewButton
              onToggleHistoryView={(value: boolean) => {
                if (value) {
                  window.location.href =
                    window.location.href.split('#')[0] +
                    window.location.hash
                      .split('?')[0]
                      .replace(/^#\/process-instance/, '#/history/process-instance')
                      .replace(/\/runtime/, '/');
                }
              }}
              initial={false}
            />
          </React.StrictMode>,
          buttons
        );
      })();
    },
  },
  {
    id: 'instanceRouteHistory',
    pluginPoint: 'cockpit.route',
    properties: {
      path: '/history/process-instance/:id',
      label: '/history',
    },

    render: (node: Element, { api }: RoutePluginParams) => {
      const hash = window?.location?.hash ?? '';
      const match = hash.match(/\/history\/process-instance\/([^\/]*)/);
      const processInstanceId = match ? match[1].split('?')[0] : null;
      if (processInstanceId) {
        (async () => {
          const instance = await get(api, `/history/process-instance/${processInstanceId}`);
          const [{ version }, diagram, activities, variables, decisions] = await Promise.all([
            get(api, `/version`),
            get(api, `/process-definition/${instance.processDefinitionId}/xml`),
            get(api, '/history/activity-instance', { processInstanceId }),
            get(api, '/history/variable-instance', { processInstanceId }),
            get(api, '/history/decision-instance', { processInstanceId }),
          ]);
          const decisionByActivity: Map<string, any> = new Map(
            decisions.map((decision: any) => [decision.activityInstanceId, decision.id])
          );
          const activityById: Map<string, any> = new Map(activities.map((activity: any) => [activity.id, activity]));
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
              <Page version={version ? (version as string) : '7.15.0'} api={api}>
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
                        showRuntimeToggle={instance.state === 'ACTIVE'}
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
                          <VariablesTable instance={instance} activities={activityById} variables={variables} />
                        </TabPanel>
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
