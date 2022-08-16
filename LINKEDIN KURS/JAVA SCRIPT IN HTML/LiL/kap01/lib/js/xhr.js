"use strict";
/**
 * Funtion zum universellen Erzeugen eines XHR-Objekts unter Einsatz von Exceptionhandling
 */
function erzXHR() {
    var resObjekt = null;
    try {
        resObjekt = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (Error) {
        try {
            resObjekt = new ActiveXObject("MSXML2.XMLHTTP");
        } catch (Error) {
            try {
                resObjekt = new XMLHttpRequest();
            } catch (Error) {
                console.log("Erzeugung des XMLHttpRequest-Objekts nicht möglich");
            }
        }
    }
    return resObjekt;
}
/**
 * Das XHMHttpRequest-Objekt
 */
var xhr = erzXHR();