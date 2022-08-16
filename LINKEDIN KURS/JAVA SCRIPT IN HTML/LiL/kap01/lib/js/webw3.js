"use strict";
var th1 = null;
var i = 0;

function rek() {
  document.getElementById("antwort2").innerHTML = Math.random();
  if (i++ > 1000)
    return;
  setTimeout(rek, 30);
}

window.onload = function() {

  document.getElementById("a").onclick = function() {
    if(th1!=null) th1.terminate();
    th1 = new Worker("lib/js/worker/bg2.js");
    th1.onmessage = function(ev) {
      document.getElementById("antwort1").innerHTML = ev.data;
    };
    th1.postMessage(0);
  };
  document.getElementById("b").onclick = function() {
    if(th1!=null) th1.terminate();
   th1 = new Worker("lib/js/worker/bg2.js");
    th1.onmessage = function(ev) {
      document.getElementById("antwort1").innerHTML = ev.data;
    };
    th1.postMessage(1);
  };
  rek();
};

