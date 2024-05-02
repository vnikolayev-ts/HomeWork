function convertToFarhenheit() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    var fahrenheit = celsius * 9/5 + 32;
    console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
}


function aufgabe2(){


    var autoListe = document.getElementById('autoMarken');

    var automarken = ['Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Ford'];
    for (var i = 0; i < automarken.length; i++) {
        var listenElement = document.createElement('li');
        listenElement.textContent = automarken[i];
        autoListe.appendChild(listenElement);
    }
    

    var listenElemente = document.querySelectorAll('#autoMarken li');
    for (var i = 0; i < listenElemente.length; i++) {
        console.log(listenElemente[i].textContent);
    }
    



}


aufgabe2();