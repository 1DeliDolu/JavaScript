window.onload=function () {
  var zb =
  document.getElementsByTagName('canvas')[0].getContext('2d');
  var rb1 = zb.createRadialGradient(120,75,20,125,75,200);
  rb1.addColorStop(0,'yellow');
  rb1.addColorStop(1,'darkblue');
  zb.fillStyle = rb1;
  zb.fillRect(0,0,600,450);

  var rb2 = zb.createRadialGradient(155,355,10,155,355,60);
  rb2.addColorStop(0, '#A7D30C');
  rb2.addColorStop(0.9, '#019F62');
  rb2.addColorStop(1, 'rgba(1,159,98,0)');
  zb.fillStyle = rb2;
  zb.fillRect(0,200,250,250);

  var rb3 = zb.createRadialGradient(210,210,10,245,235,20);
  rb3.addColorStop(0,'yellow');
  rb3.addColorStop(1,'lightgray');
  zb.fillStyle = rb3;
  zb.fillRect(150,10,600,450);
};