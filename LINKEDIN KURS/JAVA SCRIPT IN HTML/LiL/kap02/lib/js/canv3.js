window.onload = function() {
  var zeichnenbereich = document.getElementsByTagName('canvas')[0].getContext('2d');
  for (var i = 3; i < 255; i++) {
    zeichnenbereich.strokeStyle = 'rgb(' + i + ',' + (255) + ',' + i + ')';
    zeichnenbereich.strokeRect(i * 2, i, 25 + i, 40);
  }
};
