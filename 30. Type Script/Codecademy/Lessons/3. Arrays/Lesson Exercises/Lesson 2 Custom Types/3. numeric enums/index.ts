function multiplier(val:number){
    return val*10
}

enum FruitPrices {
    applePrice=5,
    peachPrice=2*applePrice,
    nectarinePrice=multiplier(applePrice)
}


const priceOfApple:FruitPrices=FruitPrices.applePrice;
const priceOfPeach:FruitPrices=FruitPrices.peachPrice

console.log(priceOfApple)
console.log(priceOfPeach)
console.log(FruitPrices.nectarinePrice)