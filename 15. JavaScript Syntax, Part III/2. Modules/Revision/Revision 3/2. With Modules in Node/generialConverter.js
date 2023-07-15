let converters = require("./convertersModule.js");
let {fahToCel} = require("./convertersModule") // destructuring only needed functions from the module.export object being imported here using require()

// let valToConvert = process.argv[2] // in terminal excute this script by node generialConverter.js 100 (any value) for this to work
// let genericTempinFah = converters.celToFah(valToConvert);
let anotherGenericTempInCel = converters.fahToCel(212)

console.log(anotherGenericTempInCel);