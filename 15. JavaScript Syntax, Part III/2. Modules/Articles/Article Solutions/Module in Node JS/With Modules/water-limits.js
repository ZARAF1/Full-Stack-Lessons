const converters = require('./converters.js')

let freezingPointInCelsius = 0;
let boilingPointInCelsius = 100;

let freezingPointInFahrenheit = converters.celsiusToFahrenheit(freezingPointInCelsius);
let boilingPointInFahrenheit = converters.celsiusToFahrenheit(boilingPointInCelsius)


console.log(`The freezing point of water in Fahrenheit is ${freezingPointInFahrenheit}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointInFahrenheit}`);