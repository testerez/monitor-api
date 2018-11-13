import axios, { AxiosResponse } from 'axios';
import { resolve } from 'path';
import colors from 'colors';

const url = process.argv[2];
const interval = 2000;

console.log(`Calling: ${url}`);
console.log(`Interval: ${interval}ms`);

const getColorForTiming = (ms: number) => {
  if (ms < 300) return colors.green;
  if (ms < 500) return colors.blue;
  if (ms < 1000) return colors.yellow;
  return colors.red;
}

let count = 0;
const request = async () => {
  setTimeout(request, interval);
  let t1 = new Date().getTime();
  const result = await axios.get(
    url,
    { headers: ['Cache-Control: no-cache, no-store, must-revalidate'] },
  ).catch(error => error);
  const ms = new Date().getTime() - t1;
  const message = result instanceof Error
    ? colors.red(`ERROR: ${result.message}`)
    : `${result.status} ${result.statusText}`;
  console.log([
    `${new Date()}`,
    getColorForTiming(ms)(`${ms}ms`),
    message,
    ++count,
  ].join(' '));
}

request();
