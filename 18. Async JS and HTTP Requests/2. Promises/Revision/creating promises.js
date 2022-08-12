const inventory = {
    sunglasses:0,
    bridalWear:62200
}

const executorFunction =(resolve, reject)=>{
    if (true){
        resolve("I resolved")
    }
    else{
        reject("I rejected")
    }

}


const myFirstPromise = new Promise(executorFunction)
console.log(myFirstPromise)
