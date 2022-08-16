var zeichnenbereich = null;
var i = 1;
var j = 1;
function zeichnen() {
  with (zeichnenbereich) {
    clearRect(10, 10, i, j);
    strokeRect(10, 10, i++, j++);
  }
  if (i < 300)
    setTimeout("zeichnen()", "2");
}

function init() {
  zeichnenbereich = document.getElementById('cv1').getContext('2d');
  zeichnen();
}

window.onload = init; 