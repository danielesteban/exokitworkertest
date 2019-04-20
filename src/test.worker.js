self.addEventListener('message', ({ data }) => {
  self.postMessage(data);
});
