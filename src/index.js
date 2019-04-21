import Worker from './test.worker';

console.log('Main thread ready');
const worker = new Worker();
worker.onmessage = ({ data }) => {
  console.log('Received', data);
};
worker.postMessage('from main thread');

