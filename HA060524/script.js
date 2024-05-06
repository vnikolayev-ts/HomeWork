// Umwandlung der add-Funktion in eine Arrow Function
const add = (a, b) => a + b;
let numbers = [5, 11, 8, 20, 7, 15];
let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
let animalsUpperCase = animals.map(animal => animal.toUpperCase());
console.log(animalsUpperCase);



let animalsLowerCase = animals.map(animal => animal.toLowerCase());
console.log(animalsLowerCase);

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let names = people.map(person => person.name);
console.log(names);
let namesAge = people.map(person => `[ ${person.name} - ${person.age} ]`);
console.log(namesAge);



let carBrands = ["BMW", "Mercedes", "Audi", "Toyota", "Ford"];
let carBrandsUpperCase = carBrands.map(brand => brand.toUpperCase());

let carBrandsLowerCase = carBrands.map(brand => brand.toLowerCase());

let carModels = [
  { brand: "BMW", model: "X5" },
  { brand: "Mercedes", model: "E-Class" },
  { brand: "Audi", model: "A4" },
  { brand: "Toyota", model: "Corolla" },
  { brand: "Ford", model: "Focus" }
];

let models = carModels.map(car => car.model);

let carModelsFormatted = carModels.map(car => `[ ${car.brand} - ${car.model} ]`);


console.log("Ausgabe - Models: " +   models);
console.log("Ausgabe - Formatiert - Models: " +   carModelsFormatted);