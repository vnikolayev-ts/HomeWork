// Umwandlung der add-Funktion in eine Arrow Function
const add = (a, b) => a + b;

// Verwendung einer Arrow Function mit .filter(), um Autos mit einer PS-Zahl größer als 200 zu filtern
let cars = [
  { brand: "BMW", horsepower: 220 },
  { brand: "Mercedes", horsepower: 180 },
  { brand: "Audi", horsepower: 250 },
  { brand: "Toyota", horsepower: 150 },
  { brand: "Ford", horsepower: 190 }
];
let powerfulCars = cars.filter(car => car.horsepower > 200);

// Erzeugung eines neuen Arrays mit Automarken in Großbuchstaben
let carBrands = ["BMW", "Mercedes", "Audi", "Toyota", "Ford"];
let carBrandsUpperCase = carBrands.map(brand => brand.toUpperCase());

// Erzeugung eines neuen Arrays mit Automarken in Kleinbuchstaben
let carBrandsLowerCase = carBrands.map(brand => brand.toLowerCase());

// Erzeugung eines neuen Arrays, das nur die Modellnamen der Autos enthält
let carModels = [
  { brand: "BMW", model: "X5" },
  { brand: "Mercedes", model: "E-Class" },
  { brand: "Audi", model: "A4" },
  { brand: "Toyota", model: "Corolla" },
  { brand: "Ford", model: "Focus" }
];
let models = carModels.map(car => car.model);
