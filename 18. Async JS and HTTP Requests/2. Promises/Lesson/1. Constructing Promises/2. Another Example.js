const executorFunction = (resolve,reject)=>{
    if (true){
        resolve('I am resolved as condition is true')
    }
    else {
        reject('I am rejected as condition is false')
    }
}

const newFunction =()=>{
    return new Promise(executorFunction)
}

console.log(newFunction())