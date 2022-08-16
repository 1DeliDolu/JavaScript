window.onload = function() {
  var zb = document.getElementById('cv1').getContext('2d');
  var rg1 = zb.createRadialGradient(120, 75, 20, 125, 75, 200);
  rg1.addColorStop(0, 'yellow');
  rg1.addColorStop(1, 'gray');
  with (zb) {
    font = "12px Arial";
    fillStyle = "Red";
    fillText("Will you please listen? I'm not the Messiah! Do you understand? Honestly!", 50, 10);
    strokeStyle = "Blue";
    font = "20px Courier";
    strokeText("Only the true Messiah denies his divinity!", 80, 50);
    fillStyle = rg1;
    strokeStyle = "Blue";
    font = "30px Times New Roman";
    fillText("What? Well, what sort of chance does that give me?", 10, 150);
    fillText("All right, I am the Messiah!", 50, 200);
    strokeText("He is! He is the Messiah!", 25, 270);
  }
}; 