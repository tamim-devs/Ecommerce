// Web Worker for countdown timer
self.onmessage = function (e) {
  let time = e.data;

  function countdown() {
    if (time > 0) {
      time -= 1000;
      postMessage(time);
      setTimeout(countdown, 1000);
    } else {
      postMessage(0);
    }
  }

  countdown();
};
