const throttle = function(fn, delay) {
  let prev = +new Date();

  return function() {
    let that = this;
    let args = arguments;
    let now = +new Date();

    if (now - prev > delay) {
      prev = +new Date();
      return fn.apply(that, args);
    }
  }
}
