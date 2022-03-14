// Using a named function declaration
const celsiusToFahrenheit =(celsius)=>{
    return celsius * (9/5) + 32
}
module.exports.celsiusToFahrenheit=celsiusToFahrenheit;
module.exports.fahrenheitToCelsius=function (fahrenheit){ // assigning an anonymous function declaration
    return fahrenheit - 32 * (5/9)
}