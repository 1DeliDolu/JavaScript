"use strict";
var th1 = new Worker("lib/js/worker/bg2.js");
var i = 0;
function rek() {
  document.getElementById("antwort2").innerHTML = Math.random();
  if (i++ > 1000)
    return;
  setTimeout(rek, 30);
}

window.onload = function() {
  th1.onmessage = function(ev) {
    document.getElementById("antwort1").innerHTML = ev.data;
  };
  document.getElementById("a").onclick = function() {
    th1.postMessage(0);
  };
  document.getElementById("b").onclick = function() {
    th1.postMessage(1);
  };
  rek();
};

