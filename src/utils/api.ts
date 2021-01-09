import { API } from '../types';

export const headers = (api: API) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-XSRF-TOKEN': api.CSRFToken,
  };
};
export const get = async (api: API, path: string, params?: Record<string, string>) => {
  const query = new URLSearchParams(params || {}).toString();
  const res = query
    ? await fetch(`${api.engineApi}${path}?${query}`, {
        method: 'get',
        headers: headers(api),
      })
    : await fetch(`${api.engineApi}${path}`, {
        method: 'get',
        headers: headers(api),
      });
  if (res.headers.get('Content-Type') === 'application/json') {
    return await res.json();
  } else {
    return await res.text();
  }
};
