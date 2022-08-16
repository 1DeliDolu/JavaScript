const { parentPort } = require('worker_threads');
var i = 0;
var zufall = 0;
var result;

while (true) {
  i++;
  zufall = Math.random();
  if (i > 100000) {
    result=zufall;
    break;
  }
}
 parentPort.postMessage({ result, status: 'Fertig' });
