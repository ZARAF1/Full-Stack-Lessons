const celToFahrenheit = celsius =>{
return celsius * (9/5) + 32;
}

module.exports.toFah=celToFahrenheit;
module.exports.toCel=function (fahrenheit){
    (fahrenheit - 32)*(5/9)
}