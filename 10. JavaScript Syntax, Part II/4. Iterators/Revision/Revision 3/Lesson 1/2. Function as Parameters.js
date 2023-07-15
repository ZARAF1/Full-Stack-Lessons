const functionRuntime = (func)=>{
    let t1 = Date.now();
    func();
    let t2 = Date.now()
    return t2 - t1;
}


const logNumbers=()=>{
    for (let i=0;i<10;i++){
        console.log(i)
    }
}
// passing named function as a callback to higher order function functionRuntime
console.log(functionRuntime(logNumbers))


// passing anonymous function to higher order function

console.log(functionRuntime(()=>{
    console.log(2+4);
}))