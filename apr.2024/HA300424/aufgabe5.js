function fahrkartenPreis(alter) {
    if (alter < 6) {
        return "Kostenlos";
    } else if (alter >= 6 && alter <= 17) {
        return "Kinderpreis";
    } else if (alter >= 18 && alter <= 66) {
        return "Vollpreis";
    } else {
        return "Seniorenpreis";
    }
}

function auswertungAlter(alterArray) {
    for (let i = 0; i < alterArray.length; i++) {
        console.log(alterArray[i] + " Jahre alt - " + " Fahrkartentarif: " + fahrkartenPreis(alterArray[i])  );
    }
}


var startVal = 18;
var alterElem = document.getElementById("alter");
alterElem.value = startVal;

document.getElementById("berechnenBtn").addEventListener("click", function() {
    var alterInput = alterElem.value;
   
    if (alterInput === "") {
        alert("Bitte geben Sie ein Alter ein.");
        return; 
    }
    var alter = parseInt(alterInput);
    if (isNaN(alter) || alter < 1) {
        alert("Bitte geben Sie eine gültige Zahl für das Alter ein.");
        return;
    }
    var preis = fahrkartenPreis(alter);
    document.getElementById("preisAusgabe").innerText = "Alter:" + alter + "\nFahrkartenpreiskategorie: " + preis;
});