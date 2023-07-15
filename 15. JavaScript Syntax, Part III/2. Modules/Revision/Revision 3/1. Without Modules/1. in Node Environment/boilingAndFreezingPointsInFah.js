let boilingPointOfWaterInCel = 100;
let freezingPointOfWaterInCel = 0;

const celToFah = cel => {
    return cel * (9 / 5) + 32;
}

let boilingPointOfWaterInFah = celToFah(boilingPointOfWaterInCel);
let freezingPointOfWaterInFah = celToFah(freezingPointOfWaterInCel)
console.log(freezingPointOfWaterInFah, boilingPointOfWaterInFah)