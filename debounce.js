const debounce = function (fn, delay) {
  let timer;
  return function() {
    let that = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(()=>{
      fn.apply(that, args);
    }, delay);
  }
}