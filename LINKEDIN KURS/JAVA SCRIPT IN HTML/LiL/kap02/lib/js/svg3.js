window.onload = function() {
    var s1 = document.getElementsByTagName("rect")[0];
    var s1h = s1.getBBox().height;
    var s2 = document.getElementsByTagName("rect")[1];

    function ani(i) {
        document.getElementById("info").innerHTML = s1h;
        s1.setAttribute("height", s1h + i);
        document.getElementById("info").innerHTML = s1.getBBox().height;

        if (i < 100) {
            setTimeout(function() {
                ani(++i);
            }, 2);
        }
    }
    s1.onclick = function() {
        ani(1);
    }
    s2.onclick = function() {
        var wert = Math.floor(Math.random() * 400);
        s2.setAttribute("height", wert);
        document.getElementById("info").innerHTML = wert;
    }


    document.getElementById("bild").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };
    for (var i in s1.getBBox()) {
        document.getElementById("info").innerHTML += i + ": " + s1.getBBox()[i] + "<br />"
    }

};