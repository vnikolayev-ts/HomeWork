
function auswertungPunktzahl() {
    var punktzahl = parseInt(document.getElementById("punkte").value);
    var retVal;


    var zahl = parseInt(punktzahl);
    if (isNaN(zahl) || zahl < 0) {
        alert("Bitte geben Sie eine gültige Zahl für das Alter ein.");
        return;
    }

    if (punktzahl > 90) {
        retVal = "sehr gut";
    } else if (punktzahl >= 80 && punktzahl <= 90) {
        retVal = "gut";
    } else if (punktzahl >= 70 && punktzahl < 80) {
        retVal = "befriedigend";
    } else if (punktzahl >= 60 && punktzahl < 70) {
        retVal = "ausreichend";
    } else {
        retVal = "nicht bestanden";
    }

    document.getElementById("bernoten").innerText = "Ergebnis: " + retVal;
}


var startVal = 50;
var punktElem = document.getElementById("punkte");
punktElem.value = startVal;