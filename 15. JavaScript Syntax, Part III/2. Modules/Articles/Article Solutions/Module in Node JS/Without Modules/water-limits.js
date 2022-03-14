const celsiusToFahrenheit =(celsius)=>{
return celsius * (9/5) + 32
}

const freezingPointC=0;
const boilingPointC=100;

const freezingPointInF= celsiusToFahrenheit(freezingPointC);
const boilingPointInF= celsiusToFahrenheit(boilingPointC)

console.log(`Freezing point in fahrenheit is ${freezingPointInF}`)
console.log(`Boiling point in fahrenheit is ${boilingPointInF}`)