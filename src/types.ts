export interface API {
  adminApi: string;
  baseApi: string;
  engineApi: string;
  engine: string;
  tasklistApi: string;
  CSRFToken: string;
}

export interface RoutePluginParams {
  api: API;
}

export interface DefinitionPluginParams {
  root: Element;
  api: API;
  processDefinitionId: string;
}

export interface InstancePluginParams {
  api: API;
  processInstanceId: string;
}

export interface TaskListPluginParams {
  api: API;
  taskId: string;
}
