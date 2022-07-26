"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var searchProductName = 'fanny pack';
var productFound;
for (var i = 0; i < products_1["default"].length; i++) {
    if (searchProductName === products_1["default"][i].name) {
        productFound = products_1["default"][i];
    }
}
console.log(productFound);
if (productFound.preOrder === 'true') {
    console.log('We’ll send you a message when your product is on the way.');
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "55 BeachWay New York";
if (Number(productFound.price) >= 25) {
    shipping = 0;
    console.log("Free shipping provided");
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(productFound.price) * taxPercent;
total = Number(productFound.price) + taxTotal + shipping;
console.log(taxTotal, total);
console.log("The the total cost of a ".concat(productFound['name'], " is ").concat(total));
