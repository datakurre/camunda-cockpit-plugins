import { API } from './types';

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
export const asctime = (duration: number): string => {
  const milliseconds = parseInt(`${(duration % 1000) / 100}`, 10),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const hours_ = hours < 10 ? '0' + hours : hours;
  const minutes_ = minutes < 10 ? '0' + minutes : minutes;
  const seconds_ = seconds < 10 ? '0' + seconds : seconds;

  return hours_ + ':' + minutes_ + ':' + seconds_ + '.' + milliseconds;
};
const filter: <T>(iterable: T[], condition: (x: T) => boolean) => T[] = (iterable, condition) => {
  const result = [];
  for (const item of iterable) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
};
