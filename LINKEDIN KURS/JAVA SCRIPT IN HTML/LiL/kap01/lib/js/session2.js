"use strict";
var counter = 0;
function testlokaleSpeicherung() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
window.onload = function () {

    document.getElementById("b1").onclick = function () {
        document.getElementById("ausgabe").innerHTML = "";

        document.getElementById("ausgabe").innerHTML += 
        sessionStorage.getItem("name") + "<br />" + 
        sessionStorage.getItem("vorname") + "<br />" + 
        sessionStorage.getItem("strasse") + "<br />" + 
        sessionStorage.getItem("plz") + "<br />" + 
        sessionStorage.getItem("ort") + "<br />" + 
        sessionStorage.getItem("kommentar") + "<hr />" + 
        JSON.parse(sessionStorage.getItem("metadaten")).browser + 
        "<hr />" + JSON.parse(sessionStorage.getItem("metadaten")).zeit;

    };

};
