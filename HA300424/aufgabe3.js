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

// Beispielaufruf:
const alterArray = [4, 10, 30, 70];
auswertungAlter(alterArray);
