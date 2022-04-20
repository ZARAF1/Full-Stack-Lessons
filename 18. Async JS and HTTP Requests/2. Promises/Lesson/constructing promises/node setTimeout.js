const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const executorFunction=(resolve,reject)=>{
    setTimeout(()=> {
        if (inventory.sunglasses > 0) {
            resolve("Sunglasses order processed.")
        } else {
            reject("Order rejected low quantity.")
        }
    },2000)
    }



const returnPromiseFunction =()=>{
   return new Promise(executorFunction)

    console.log(returnPromiseFunction())}