const calculateFunctionRuntime = (funcparam)=>{
    let t1=Date.now()
    funcparam();
    let t2=Date.now();
    return t2-t1
}

const looper=(num)=>{
    for (let i=0;i<50;i++){
        console.log(i)
    }
}

// console.log('time is ' + calculateFunctionRuntime(looper))
console.log(calculateFunctionRuntime(function (){
    for (let i=0;i<50;i++){
        console.log(i)
    }
}))