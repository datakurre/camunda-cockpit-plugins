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

export const filter: <T>(iterable: T[], condition: (x: T) => boolean) => T[] = (iterable, condition) => {
  const result = [];
  for (const item of iterable) {
    if (condition(item)) {
      result.push(item);
    }
  }
  return result;
};
