import products from "./products";

let searchProductName:string='fanny pack';
let productFound;
for (let i = 0 ; i<products.length ; i++){
    if(searchProductName===products[i].name){
        productFound=products[i];
    }
}
console.log(productFound)
if(productFound.preOrder==='true'){
    console.log('We’ll send you a message when your product is on the way.');
}

let shipping: number;
let taxPercent:number;
let taxTotal:number;
let total:number;
let shippingAddress:string="55 BeachWay New York";

if (Number(productFound.price)>=25){
    shipping=0;
    console.log("Free shipping provided");
}
else{
    shipping=5;
}

if (shippingAddress.match('New York')){
    taxPercent=0.1;
}
else{
    taxPercent=0.05;
}

taxTotal=Number(productFound.price) * taxPercent;
total =Number(productFound.price) + taxTotal + shipping;
console.log(taxTotal,total)

console.log(`The the total cost of a ${productFound['name']} is ${total}`)