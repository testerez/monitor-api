import axios, { AxiosResponse } from 'axios';
import { resolve } from 'path';

const url = process.argv[2];
const interval = 2000;

console.log(`Calling: ${url}`);
console.log(`Interval: ${interval}ms`);

const request = async () => {
  setTimeout(request, interval);
  let t1 = new Date().getTime();
  const result = await axios.get(url).catch(error => error);
  const ms = new Date().getTime() - t1;
  const message = result instanceof Error
    ? `ERROR: ${result.message}`
    : `${result.status} ${result.statusText}`;
  console.log(`${new Date()} ${ms}ms ${message}`);
}

request();
