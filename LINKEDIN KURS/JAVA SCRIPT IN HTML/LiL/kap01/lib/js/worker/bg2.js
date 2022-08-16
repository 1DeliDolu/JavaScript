var abbruchwert = 1000000000;
var nachrichtwert = 100000000;
self.onmessage = function(ev) {
  self.postMessage("Gesendeter Wert: " + ev.data);

  if (ev.data == 0)
    fkt1();
  
else
    fkt2();
};
function fkt1() {
  var i = 0;
  while (true) {
    i++;
    if (i % nachrichtwert == 0)
      postMessage("Wert von i: " + i);
    if (i > abbruchwert) {

      postMessage("Funktion 1 ist fertig");
      break;
    }
  }
}

function fkt2() {
  var i = 0;
  while (true) {
    i++;
    if (i % nachrichtwert * 3 == 0)
      postMessage("Zufallszahl: " + Math.random());
    if (i > abbruchwert) {

      postMessage("Funktion 2 ist fertig");
      break;
    }
  }
}

