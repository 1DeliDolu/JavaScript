
window.onload=function () {
  var zeichnenbereich = 
    document.getElementsByTagName('canvas')[0].getContext('2d');
  for (var i=3;i<255;i++) {
    zeichnenbereich.fillStyle = 'rgba(' + i + ',' +
    (255-i) + ',' + i + ',' + (1/(i/3)) + ')';
    zeichnenbereich.fillRect(i * 2, i, 25, 25 + i);
  }
};