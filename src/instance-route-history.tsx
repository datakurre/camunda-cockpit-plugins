import 'allotment/dist/style.css';

import './instance-route-history.scss';

import { Allotment } from 'allotment';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Expression, GridDataAutoCompleteHandler } from 'react-filter-box';
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
import { get, post } from './utils/api';
import { PluginSettings, loadSettings, saveSettings } from './utils/misc';
import Pagination from "./Components/Pagination";

class InstanceQueryAutoCompleteHandler extends GridDataAutoCompleteHandler {
  query = '';

  setQuery(query: string) {
    this.query = query;
  }

  hasCategory(category: string) {
    return true;
  }

  needCategories(): string[] {
    return super
      .needCategories()
      .filter((value: string) => !(['key', 'started', 'finished'].includes(value) && this.query.includes(value)));
  }

  needOperators(parsedCategory: string) {
    if (parsedCategory === 'started') {
      return ['after'];
    }
    if (parsedCategory === 'finished') {
      return ['before'];
    }
    if (parsedCategory === 'key') {
      return ['==', 'like'];
    }
    return ['==', 'like', 'ilike'];
  }

  needValues(parsedCategory: string, parsedOperator: string) {
    if (parsedOperator === 'after' || parsedOperator === 'before') {
      return [{ customType: 'date' }];
    }
    return super.needValues(parsedCategory, parsedOperator);
  }
}

const InstanceQueryOptions = [
  {
    columnField: 'started',
    type: 'date',
  },
  {
    columnField: 'finished',
    type: 'date',
  },
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
  const [query, setQuery] = useState({} as Record<string, string | number | null>);
  const [historyTabNode, setHistoryTabNode] = useState(initialState.historyTabNode);

  hooks.setHistoryTabNode = setHistoryTabNode;

  const [instances, setInstances]: any = useState([] as any[]);
  const [instancesCount, setInstancesCount] = useState(0);
  const [currentPage, setCurrentPage]  = useState(1);
  const [perPage, setPerPage] = useState(50);
  const [firstResult, setFirstResult] = useState(0);
  // FETCH

  useEffect(() => {
    (async () => {
      setInstancesCount(
        (await get(api, '/history/process-instance/count', { processDefinitionId })).count
      )

      setInstances(
        await post(
          api,
          '/history/process-instance',
          { maxResults: `${perPage}`, firstResult: `${firstResult}` },
          JSON.stringify({
            sortBy: 'endTime',
            sortOrder: 'desc',
            processDefinitionId,
            ...query,
          })
        )
      );
    })();
  }, [query, firstResult]);

  useEffect(() => {
    const query: any = {};
    const variables = [];
    for (const { category, operator, value } of expressions) {
      if (category === 'started' && operator === 'after' && !isNaN(new Date(`${value}`).getTime())) {
        query['startedAfter'] = `${value}T00:00:00.000+0000`;
      } else if (category === 'finished' && operator === 'before' && !isNaN(new Date(`${value}`).getTime())) {
        query['finishedBefore'] = `${value}T00:00:00.000+0000`;
      } else if (category === 'key' && operator === '==') {
        query.processInstanceBusinessKey = value;
      } else if (category === 'key' && operator === 'like') {
        query.processInstanceBusinessKeyLike = value;
      } else if (operator === '==') {
        variables.push({
          name: category,
          operator: 'eq',
          value: value,
        });
      } else if (operator === 'like' || operator === 'ilike') {
        variables.push({
          name: category,
          operator: 'like',
          value: value,
        });
      }
      if (operator === 'ilike') {
        query.variableNamesIgnoreCase = true;
        query.variableValuesIgnoreCase = true;
      }
    }
    if (variables.length) {
      query['variables'] = variables;
    }
    setQuery(query);
  }, [expressions]);

  // Hack to ensure long living HTML node for filter box
  if (historyTabNode && !Array.from(historyTabNode.children).includes(root)) {
    historyTabNode.appendChild(root);
  }

  const pageClicked = (firstResult: number, page: number) => {
    setCurrentPage(page);
    setFirstResult(firstResult)
  };

  return historyTabNode ? (
    <Portal node={root}>
      <FilterBox
        options={InstanceQueryOptions}
        autoCompleteHandler={autoCompleteHandler}
        onParseOk={setExpressions}
        defaultQuery={(): string => ''}
      />
      {instances.length ? <HistoryTable instances={instances} /> : null}
      <Pagination currentPage={currentPage} perPage={perPage} total={instancesCount} onPage={pageClicked}></Pagination>
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
      createRoot(node!).render(
        <React.StrictMode>
          <Plugin root={node} api={api} processDefinitionId={processDefinitionId} />
        </React.StrictMode>
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
        createRoot(buttons!).render(
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
          </React.StrictMode>
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
      const settings = loadSettings();
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
          createRoot(node!).render(
            <React.StrictMode>
              <Page version={version ? (version as string) : '7.15.0'} api={api}>
                <BreadcrumbsPanel
                  processDefinitionId={instance.processDefinitionId}
                  processDefinitionName={instance.processDefinitionName}
                  processInstanceId={processInstanceId}
                />
                <Container>
                  <Allotment
                    vertical={true}
                    onChange={(numbers: number[]) => {
                      saveSettings({
                        ...loadSettings(),
                        topPaneSize: numbers?.[0] || null,
                      });
                    }}
                  >
                    <Allotment.Pane preferredSize={settings.topPaneSize || '66%'}>
                      <Allotment
                        vertical={false}
                        onChange={(numbers: number[]) => {
                          saveSettings({
                            ...loadSettings(),
                            leftPaneSize: numbers?.[0] || null,
                          });
                        }}
                      >
                        <Allotment.Pane preferredSize={settings.leftPaneSize || '33%'}>
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
                        </Allotment.Pane>
                        <Allotment.Pane>
                          <BPMN
                            activities={activities}
                            diagramXML={diagram.bpmn20Xml}
                            className="ctn-content"
                            style={{ width: '100%', height: '100%' }}
                            showRuntimeToggle={instance.state === 'ACTIVE'}
                          />
                        </Allotment.Pane>
                      </Allotment>
                    </Allotment.Pane>
                    <Allotment.Pane>
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
                    </Allotment.Pane>
                  </Allotment>
                </Container>
              </Page>
            </React.StrictMode>
          );
        })();
      }
    },
  },
];
