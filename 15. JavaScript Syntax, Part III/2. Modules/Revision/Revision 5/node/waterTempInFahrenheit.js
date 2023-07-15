const converter = require('./converters')
const {celToFah} = converter;

const freezingPointCentigrade = 0;
const boilingPointCentigrade = 100;


const freezingPointFahrenheit = celToFah(freezingPointCentigrade);
const boilingPointFahrenheit = celToFah(boilingPointCentigrade);

console.log(freezingPointFahrenheit, boilingPointFahrenheit)