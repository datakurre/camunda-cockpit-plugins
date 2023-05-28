import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Expression, GridDataAutoCompleteHandler } from 'react-filter-box';

import FilterBox from './Components/FilterBox';
import Portal from './Components/Portal';
import StatisticsTable from './Components/StatisticsTable';
import { ToggleHistoryStatisticsButton } from './Components/ToggleHistoryStatisticsButton';
import { DefinitionPluginParams } from './types';
import { get } from './utils/api';
import { filter } from './utils/misc';

class DefinitionFilterAutoCompleteHandler extends GridDataAutoCompleteHandler {
  query = '';

  setQuery(query: string) {
    this.query = query;
  }

  needCategories(): string[] {
    return super.needCategories().filter((value: string) => !this.query.includes(value));
  }

  needOperators(parsedCategory: string) {
    if (parsedCategory === 'started') {
      return ['after'];
    }
    if (parsedCategory === 'finished') {
      return ['before'];
    }
    if (parsedCategory === 'maxResults') {
      return ['is'];
    }
    return [];
  }

  needValues(parsedCategory: string, parsedOperator: string) {
    if (parsedOperator === 'after' || parsedOperator === 'before') {
      return [{ customType: 'date' }];
    }
    return super.needValues(parsedCategory, parsedOperator);
  }
}

const DefinitionFilterOptions = [
  {
    columnField: 'started',
    type: 'date',
  },
  {
    columnField: 'finished',
    type: 'date',
  },
  {
    columnField: 'maxResults',
    type: 'text',
  },
];

const initialState: Record<string, any> = {
  viewer: null,
  statistics: null,
};

const hooks: Record<string, any> = {
  setViewer: (viewer: any) => (initialState.viewer = viewer),
  setStatistics: (node: Element) => (initialState.statistics = node),
};

const Plugin: React.FC<DefinitionPluginParams> = ({ root, api, processDefinitionId }) => {
  const [autoCompleteHandler] = useState(new DefinitionFilterAutoCompleteHandler([], DefinitionFilterOptions));
  const [expressions, setExpressions] = useState([] as Expression[]);
  const [query, setQuery] = useState({} as Record<string, string | null>);
  const [viewer, setViewer] = useState(initialState.viewer);
  const [statistics, setStatistics] = useState(initialState.statistics);

  hooks.setViewer = setViewer;
  hooks.setStatistics = setStatistics;

  const [activities, setActivities]: any = useState([] as any[]);
  const [tokens, setTokens] = useState([] as Element[]);
  const [showTokens, setShowTokens] = useState(false);

  // FETCH

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      (async () => {
        const activities = await get(api, '/history/activity-instance', {
          ...query,
          processDefinitionId,
        });
        setActivities(activities);
      })();
    }
  }, [query]);

  useEffect(() => {
    if (expressions.length > 0) {
      const query: any = {
        sortBy: 'endTime',
        sortOrder: 'desc',
        maxResults: 1000,
      };
      for (const { category, operator, value } of expressions) {
        if (category === 'started' && operator === 'after' && !isNaN(new Date(`${value}`).getTime())) {
          query['startedAfter'] = `${value}T00:00:00.000+0000`;
        } else if (category === 'finished' && operator === 'before' && !isNaN(new Date(`${value}`).getTime())) {
          query['finishedBefore'] = `${value}T00:00:00.000+0000`;
        } else if (category === 'maxResults' && operator == 'is' && !isNaN(parseInt(`${value}`, 10))) {
          query['maxResults'] = `${value}`;
        }
      }
      setQuery(query);
    } else {
      /* @ts-ignore */
      const weekAgo = new Date(new Date() - 1000 * 3600 * 24 * 7).toISOString().split('T')[0];
      /* @ts-ignore */
      const tomorrow = new Date(new Date() - 1000 * 3600 * 24 * -1).toISOString().split('T')[0];
      setQuery({
        sortBy: 'endTime',
        sortOrder: 'desc',
        startedAfter: `${weekAgo}T00:00:00.000+0000`,
        finishedBefore: `${tomorrow}T00:00:00.000+0000`,
        maxResults: '1000',
      });
    }
  }, [expressions]);

  // Overlay

  useEffect(() => {
    if (viewer) {
      const toggleHistoryStatisticsButton = document.createElement('div');
      toggleHistoryStatisticsButton.style.cssText = `
          position: absolute;
          right: 15px;
          top: 60px;
        `;
      viewer._container.appendChild(toggleHistoryStatisticsButton);
      createRoot(toggleHistoryStatisticsButton!).render(
        <React.StrictMode>
          <ToggleHistoryStatisticsButton
            onToggleHistoryStatistics={(value: boolean) => {
              setShowTokens(value);
            }}
          />
        </React.StrictMode>
      );
    }
  }, [viewer]);

  useEffect(() => {
    for (const token of tokens) {
      token.parentElement?.removeChild(token);
    }

    if (showTokens && viewer && activities.length) {
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
          overlays.add(id.split('#')[0], {
            position: {
              bottom: 17,
              right: 10,
            },
            html: overlay,
          });
          update.push(overlay);
        } catch (e) {}
      }
      setTokens(update);
    }
  }, [viewer, activities, showTokens]);

  // Hack to ensure long living HTML node for filter box
  if (statistics && !Array.from(statistics.children).includes(root)) {
    statistics.appendChild(root);
  }

  // Tabs
  return statistics ? (
    <Portal node={root}>
      <FilterBox
        options={DefinitionFilterOptions}
        autoCompleteHandler={autoCompleteHandler}
        onParseOk={setExpressions}
        defaultQuery={(): string => {
          // @ts-ignore
          const weekAgo = new Date(new Date() - 1000 * 3600 * 24 * 7).toISOString().split('T')[0];
          // @ts-ignore
          const tomorrow = new Date(new Date() - 1000 * 3600 * 24 * -1).toISOString().split('T')[0];
          return `started after ${weekAgo} AND finished before ${tomorrow} AND maxResults is 1000`;
        }}
      />
      {activities.length ? (
        <StatisticsTable activities={filter(activities, activity => activity.activityName && activity.endTime)} />
      ) : null}
    </Portal>
  ) : null;
};

export default [
  {
    id: 'definitionHistoricActivitiesDiagramTokens',
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
      createRoot(node!).render(
        <React.StrictMode>
          <Plugin root={node} api={api} processDefinitionId={processDefinitionId} />
        </React.StrictMode>
      );
    },
  },
];
