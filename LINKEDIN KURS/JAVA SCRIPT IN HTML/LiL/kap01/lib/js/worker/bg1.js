var i = 0;
var zufall = 0;
while (true) {
  i++;
  zufall = Math.random();
  postMessage("Schritt " + i + ", Wert der Zufallszahl: " + zufall);
  if (i > 100000) {
    postMessage("Fertig");
    break;
  }
}