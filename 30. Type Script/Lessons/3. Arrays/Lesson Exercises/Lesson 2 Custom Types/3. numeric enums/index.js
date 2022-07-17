function multiplier(val) {
    return val * 10;
}
var FruitPrices;
(function (FruitPrices) {
    FruitPrices[FruitPrices["applePrice"] = 5] = "applePrice";
    FruitPrices[FruitPrices["peachPrice"] = 10] = "peachPrice";
    FruitPrices[FruitPrices["nectarinePrice"] = multiplier(FruitPrices.applePrice)] = "nectarinePrice";
})(FruitPrices || (FruitPrices = {}));
var priceOfApple = FruitPrices.applePrice;
var priceOfPeach = FruitPrices.peachPrice;
console.log(priceOfApple);
console.log(priceOfPeach);
console.log(FruitPrices.nectarinePrice);
