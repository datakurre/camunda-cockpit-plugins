import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import HistoricFilterBox from './Components/HistoricFilterBox';
import Portal from './Components/Portal';
import StatisticsTable from './Components/StatisticsTable';
import { ToggleHistoryStatisticsButton } from './Components/ToggleHistoryStatisticsButton';
import { DefinitionPluginParams } from './types';
import { get } from './utils/api';
import { filter } from './utils/misc';

const initialState: Record<string, any> = {
  viewer: null,
  statistics: null,
};

const hooks: Record<string, any> = {
  setViewer: (viewer: any) => (initialState.viewer = viewer),
  setStatistics: (node: Element) => (initialState.statistics = node),
};

const Plugin: React.FC<DefinitionPluginParams> = ({ root, api, processDefinitionId }) => {
  const [query, setQuery] = useState({} as Record<string, string>);
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
      ReactDOM.render(
        <React.StrictMode>
          <ToggleHistoryStatisticsButton
            onToggleHistoryStatistics={(value: boolean) => {
              setShowTokens(value);
            }}
          />
        </React.StrictMode>,
        toggleHistoryStatisticsButton
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
      <HistoricFilterBox onChange={setQuery} />
      {activities.length ? (
        <StatisticsTable activities={filter(activities, activity => activity.activityName && activity.endTime)} />
      ) : null}
    </Portal>
  ) : null;
};

export default [
  {
    id: 'definitionHistoricActivitiesDiagramBadges',
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
      ReactDOM.render(
        <React.StrictMode>
          <Plugin root={node} api={api} processDefinitionId={processDefinitionId} />
        </React.StrictMode>,
        node
      );
    },
  },
];
