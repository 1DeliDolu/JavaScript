"use strict";
var counter = 0;
function testlokaleSpeicherung() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e) {
    return false;
  }
}
window.onload = function () {
   
      document.getElementById("b1").onclick = function() {
        if (testlokaleSpeicherung() == false) {
            alert("Die lokale Speicherung ist nicht möglich");
            return;
          }
        localStorage.setItem("key" + counter++, Math.random());
      };
      document.getElementById("b2").onclick = function() {

        document.getElementById("ausgabe").innerHTML = "";
        var j = 0;
        for (var i in localStorage) {
          if (localStorage.getItem(i)!=null) {
          document.getElementById("ausgabe").innerHTML += localStorage.key(j++) + ": " + localStorage.getItem(i) + "<br />";
          }
        }
      };
      document.getElementById("b3").onclick = function() {
        counter = 0;
        localStorage.clear();
      };
      document.getElementById("b4").onclick = function() {
          sessionStorage.setItem("name", document.getElementById("name").value);
          sessionStorage.setItem("vorname", document.getElementById("vorname").value);
          sessionStorage.setItem("strasse", document.getElementById("strasse").value);
          sessionStorage.setItem("plz", document.getElementById("plz").value);
          sessionStorage.setItem("ort", document.getElementById("ort").value);
          sessionStorage.setItem("kommentar", document.getElementById("kommentar").value);
          sessionStorage.setItem("metadaten", JSON.stringify({
            'browser' : navigator.userAgent,
            'zeit' : new Date().toString()
          }));
        
        location.href = "session2.html";
      };
};
