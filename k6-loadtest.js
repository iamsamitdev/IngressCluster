import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 200 }, // ramp up to 10 VUs
    { duration: '60s', target: 400 }, // stay at 20 VUs
    { duration: '30s', target: 200 },  // ramp down to 0 VUs
    { duration: '10s', target: 0 },  // ramp down to 0 VUs
  ],
};

export default function () {
  http.get('http://localhost:53402');
  sleep(1);
}
