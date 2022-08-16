window.onload = function() {
  var zb = document.getElementsByTagName('canvas')[0].getContext('2d');
  var lg1 = zb.createLinearGradient(00, 00, 400, 175);
  lg1.addColorStop(0, 'white');
  lg1.addColorStop(1, 'black');
  zb.fillStyle = lg1;
  zb.fillRect(0, 0, 650, 195);

  var lg2 = zb.createLinearGradient(0, 0, 650, 0);
  lg2.addColorStop(0, '#00ABEB');
  lg2.addColorStop(0.3, '#fff');
  lg2.addColorStop(0.5, 'red');
  lg2.addColorStop(0.75, 'yellow');
  lg2.addColorStop(1, '#fff');
  zb.fillStyle = lg2;
  zb.fillRect(0, 200, 650, 450);
}; 