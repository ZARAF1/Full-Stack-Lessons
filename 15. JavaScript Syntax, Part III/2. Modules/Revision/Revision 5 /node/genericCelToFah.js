const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converters');

let inputCel = process.argv[2];
let tempInFahrenheit = 212;
let outputFah = celsiusToFahrenheit(inputCel);
console.log(outputFah);
let outputCel = fahrenheitToCelsius(tempInFahrenheit);
console.log(outputCel);
