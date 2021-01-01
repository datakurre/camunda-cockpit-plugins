export interface API {
  engineApi: string;
  CSRFToken: string;
}

export interface RoutePluginParams {
  api: API;
}

export interface DefinitionPluginParams {
  api: API;
  processDefinitionId: string;
}

export interface InstancePluginParams {
  api: API;
  processInstanceId: string;
}
