console.log('Worker ready');
self.addEventListener('message', ({ data }) => {
  console.log('Received', data);
});
self.postMessage('from worker');

