let converter = require("./convertersModule")

let boilingPointOfWaterInCel = 100;
let freezingPointOfWaterInCel = 0;

let boilingPointOfWaterInFah = converter.celToFah(boilingPointOfWaterInCel)
let freezingPointOfWaterInFah = converter.celToFah(freezingPointOfWaterInCel)

console.log(boilingPointOfWaterInFah, freezingPointOfWaterInFah)

