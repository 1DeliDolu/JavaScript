var zb;
window.onload = function() {
  document.getElementById("b1").onclick = function() {
    with (zb) {
      translate(375, 75);
      fillStyle = "cyan";
      fillRect(20, 20, 35, 35);
    }
  };
  zb = document.getElementById('cv1').getContext('2d');
  with (zb) {
    fillStyle = "red";
    fillRect(20, 20, 35, 35);
  }
};
