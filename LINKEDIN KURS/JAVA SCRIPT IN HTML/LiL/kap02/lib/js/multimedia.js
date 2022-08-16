"use strict";
window.onload = function() {
    document.getElementById("vidplay").onclick = function() {
        document.getElementById("vid").play();
    };
    document.getElementById("vidstop").onclick = function() {
        document.getElementById("vid").pause();
    };
    document.getElementById("audplay").onclick = function() {
        document.getElementById("aud").play();
    };
    document.getElementById("audstop").onclick = function() {
        document.getElementById("aud").pause();
    };
};