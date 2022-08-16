const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  
  var thread=  new Worker("./worker/bg1node.js");
} else {
  console.log('Fehler!');
}
/*
thread.onmessage = function (ev) {
  console.log(ev.data);
}*/
thread.on('message', (message) => console.log('received', message));
thread.onerror = function (ev) {
  console.log(ev.message);
};
