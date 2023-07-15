const celsiusToFahrenheit = celVal => {
    return celVal * (9 / 5) + 32;
}

module.exports.celToFah = celsiusToFahrenheit;
module.exports.fahToCel = function (fahVal) {
    return (fahrenheit - 32) * (5 / 9);
}