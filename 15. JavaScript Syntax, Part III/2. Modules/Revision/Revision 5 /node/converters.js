function celtoFah(cel) {
  return cel * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celtoFah;

module.exports.fahrenheitToCelsius = function (fah) {
  return (fah - 32) * (5 / 9);
};
