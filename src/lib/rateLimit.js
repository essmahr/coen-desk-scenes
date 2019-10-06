function rateLimit(func, waitTime) {
  const funcQueue = [];
  let isWaiting;

  const executeFunc = function(args) {
    isWaiting = true;
    func(args);
    setTimeout(play, waitTime);
  };

  const play = function() {
    isWaiting = false;
    if (funcQueue.length) {
      var params = funcQueue.shift();
      executeFunc(params);
    }
  };

  return function(args) {
    if (isWaiting) {
      funcQueue.push(args);
    } else {
      executeFunc(args);
    }
  };
}

export default rateLimit;
