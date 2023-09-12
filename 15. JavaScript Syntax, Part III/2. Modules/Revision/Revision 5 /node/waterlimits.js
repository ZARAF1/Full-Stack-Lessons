const converters = require('./converters.js');
const { celsiusToFahrenheit, fahrenheitToCelsius } = converters;

let boilingPointWaterInCel = 100;
let freezingPointWaterInCel = 0;

let outputBoilingPoint = `The boiling point of water in Celsius is ${celsiusToFahrenheit(
  boilingPointWaterInCel
)}`;
console.log(outputBoilingPoint);

let outputFreezingPoint = `The freezing point of water in Celsius is ${celsiusToFahrenheit(
  freezingPointWaterInCel
)}`;
console.log(outputFreezingPoint);
