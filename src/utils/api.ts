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
export const post = async (api: API, path: string, params?: Record<string, string>, payload?: string) => {
  const query = new URLSearchParams(params || {}).toString();
  const res = query
    ? await fetch(`${api.engineApi}${path}?${query}`, {
        method: 'post',
        headers: headers(api),
        body: payload,
      })
    : await fetch(`${api.engineApi}${path}`, {
        method: 'post',
        headers: headers(api),
        body: payload,
      });
  if (res.headers.get('Content-Type') === 'application/json') {
    return await res.json();
  } else {
    return await res.text();
  }
};
