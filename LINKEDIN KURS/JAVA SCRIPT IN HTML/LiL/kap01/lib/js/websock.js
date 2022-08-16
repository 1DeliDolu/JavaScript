"use strict";
var con = new WebSocket('ws://localhost:1337');
window.onload = function() {
  document.getElementById('btn').onclick = function() {
    con.send(Math.random());
  };
  con.onopen = function() {
    con.send("Login");
  };
  con.onerror = function(error) {
    document.getElementById('info').innerHTML = 'WebSocket-Fehler:  ' + error;
  };
  con.onmessage = function(e) {
    document.getElementById('info').innerHTML = e.data;
  };
};

