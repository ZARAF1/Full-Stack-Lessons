const higherOrderFunction = param =>{
    param();
    console.log(`The higher order function invoked ${param.name}`)
}

const anotherFunction=()=>{
    console.log("I am being called in the higher order function")
}

higherOrderFunction(anotherFunction)
higherOrderFunction(() => {
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
});