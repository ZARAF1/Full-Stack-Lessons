const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}

const executor =(resolve,reject)=>{
    return inventory['sunglasses']>0 ? resolve('order processed'):reject('order rejected')
}

const orderSunglasses = ()=>{
    return new Promise(executor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise)