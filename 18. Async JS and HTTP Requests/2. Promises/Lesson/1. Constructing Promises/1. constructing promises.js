const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const executorFunction=(resolve,reject)=>{
    if(inventory.sunglasses>0){
        resolve("Sunglasses order processed.")
    }
    else{
        reject("Order rejected low quantity.")
    }
}

const promiseFunction=()=>{
    const newPromise=new Promise(executorFunction);
    return newPromise;
}

const orderPromise=promiseFunction();
console.log(orderPromise)