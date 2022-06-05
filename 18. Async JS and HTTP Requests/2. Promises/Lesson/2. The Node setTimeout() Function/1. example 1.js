const returnPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('I resolve')},500)
    })
}
const prom = returnPromise();
console.log("I am first line")
console.log(prom);
console.log("I am last line or second maybe")