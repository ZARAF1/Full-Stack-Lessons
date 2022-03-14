const {celsiusToFahrenheit}=require('./converters.js')

let celsiusInput = process.argv[2];
let fahrenheitValue = celsiusToFahrenheit(celsiusInput);


console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);