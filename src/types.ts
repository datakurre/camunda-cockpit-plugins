export interface API {
  engineApi: string;
  CSRFToken: string;
}

export interface RouteParams {
  api: API;
}

export interface TabParams {
  api: API;
  processDefinitionId: string;
}
