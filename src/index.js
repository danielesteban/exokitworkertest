import Worker from './test.worker';

const worker = new Worker();
worker.onmessage = ({ data }) => {
  console.log(data);
};
worker.postMessage({ test: 'echo' });
