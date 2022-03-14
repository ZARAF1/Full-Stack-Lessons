const celsiusToFahrenheit =(celsius)=>{
    return celsius * (9/5) + 32
}

let celsiusInput =  process.argv[2]
let fahrenheitValue = celsiusToFahrenheit(celsiusInput)

console.log(`The value of ${celsiusInput} Celsius is ${fahrenheitValue} Fahrenheit`)