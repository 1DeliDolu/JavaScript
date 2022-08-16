function zeichnen() {
  var zeichnenbereich = document.getElementsByTagName('canvas')[0].getContext('2d');
  zeichnenbereich.fillStyle = "rgb(220,0,0)";
  zeichnenbereich.fillRect(15, 15, 155, 50);
  zeichnenbereich.fillStyle = "rgba(110, 20, 250, 0.1)";
  zeichnenbereich.fillRect(30, 40, 255, 250);
}

function init() {
  zeichnen();
}

window.onload = init; 