"use strict";
var thread = null;
window.onload = function () {
  document.getElementsByTagName("button")[0].onclick = function() {
    thread = new Worker("lib/js/worker/bg1.js");
    thread.onmessage = function(ev) {
      document.getElementById("antwort1").innerHTML = ev.data;
    };
    thread.onerror = function(ev) {
      document.getElementById("antwort1").innerHTML = ev.message;
    };
  };
  document.getElementsByTagName("button")[1].onclick = function() {
    thread.terminate();
    alert("Ende Web Worker");
  };
  document.getElementsByTagName("button")[2].onclick = function() {
    document.getElementById("antwort2").innerHTML = prompt("Geben Sie Ihren Namen ein");
  };
}; 