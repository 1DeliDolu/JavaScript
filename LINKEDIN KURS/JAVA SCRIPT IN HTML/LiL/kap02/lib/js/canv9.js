window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  with (zb) {
    fillStyle = "rgba(0,0,245,0.9)";
    translate(375, 75);
    rotate(Math.PI / 3);
    fillRect(0, 0, 200, 200);
  }
}; 