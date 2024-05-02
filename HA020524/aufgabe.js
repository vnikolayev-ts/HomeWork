function convertToFarhenheit() {
    var celsius = parseFloat(document.getElementById('celsiusInput').value);
    var fahrenheit = celsius * 9/5 + 32;
    console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
}
