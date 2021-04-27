import DefinitionHistoricActivitiesPlugins from './definition-historic-activities';
import InstanceHistoricActivitiesPlugins from './instance-historic-activities';
import InstanceHistoryRoutePlugins from './instance-route-history';

export default [
  ...DefinitionHistoricActivitiesPlugins,
  ...InstanceHistoricActivitiesPlugins,
  ...InstanceHistoryRoutePlugins,
];
