const obj = require("./converters")
console.log(obj.celToFah(100))
console.log(obj.fahToCel(212))


// destructing technique

const {celToFah} = require("./converters")
console.log(celToFah(100))

const fahInput = process.argv[2];
const {fahToCel} = require("./converters")
console.log(fahToCel(fahInput))

