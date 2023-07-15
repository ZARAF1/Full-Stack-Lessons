const {celToFah} = require('./converters')
const {fahToCel} = require('./converters')

const celInput = process.argv[2];

const fahrenheitValue = celToFah(celInput);
console.log(fahrenheitValue)