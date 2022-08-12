const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const executorFunction=(resolve,reject)=>{

    setTimeout(( ) => {inventory.sunglasses>0 ? resolve('I resolved!'):reject("I rejected")}, 3000);

    }



const returnPromiseFunction =()=> {
    return new Promise(executorFunction)
}
const checkPromise=returnPromiseFunction()
    console.log(returnPromiseFunction())