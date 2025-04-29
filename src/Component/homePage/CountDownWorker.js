// Countdown Worker
self.onmessage = function (e) {
  let time = e.data;

  const interval = setInterval(() => {
    time -= 1000;
    if (time <= 0) {
      clearInterval(interval);
      self.postMessage(0);
    } else {
      self.postMessage(time);
    }
  }, 1000);
};

export default counterworker