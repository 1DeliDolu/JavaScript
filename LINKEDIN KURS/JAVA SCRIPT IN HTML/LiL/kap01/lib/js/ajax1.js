window.onload = function() {

    document.getElementById("bild").onmouseover = function() {
        var p1 = new Promise(
            // Resolver-Funktion kann den Promise sowohl auflösen als auch verwerfen
            // reject the promise
            function(resolve, reject) {
                xhr.open("get", "ajax1.php", true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (Math.random() < 0.5) {
                            resolve()
                        } else {
                            reject();
                        }

                        document.getElementById("info").innerHTML = xhr.responseText;
                    }
                };
                xhr.send();

            });

        p1.then(function() {
            console.log("Erste Versprechen erfüllt. \tAufruf nächste async-Aktion.\n");
            xhr.open("get", "ajax2.php", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    console.log("Zweite async-Aktion erledigt.");
                    document.getElementById("info").innerHTML += xhr.responseText;
                }
            };
            xhr.send();

        }).catch(function() {
            console.log("Ausnahme geworfen. \tErste Aktion wird verworfen. \tZweite async-Aktion wird nicht mehr erledigt.\n");

        });

    };

    document.getElementById("bild").onmouseout = function() {
        document.getElementById("info").innerHTML = "";

    };

};