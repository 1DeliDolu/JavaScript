"use strict";
window.onload = function () {
    document.getElementById("btn1").onclick = function () {

        navigator.geolocation.getCurrentPosition(function (e) {
            document.getElementById("info").innerHTML = e.coords.latitude + "," + e.coords.longitude;

        },function(){});
    };

    document.getElementById("btn2").onclick = function () {

        navigator.geolocation.getCurrentPosition(function (e) {
            document.getElementById("info").innerHTML = "";
            loc(e);

        });
    };
    function loc(e) {
        var erg = "";

        for (var i in e) {
            if (typeof e[i] != "object") {
                document.getElementById("info").innerHTML += i + ":" + e[i] + "<br />";
            }
            else {
                loc(e[i]);

            }
        }


    }
};
