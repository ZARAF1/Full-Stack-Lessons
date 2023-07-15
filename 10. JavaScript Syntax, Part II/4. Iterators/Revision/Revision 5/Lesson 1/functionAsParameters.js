// function 1 example
const looper=()=>{
    for (let i=0;i<1000;i++){
    if (i%2===0){
        return i;
    }
    }
}
const funcRuntime=(funcParam)=>{
    let t1=Date.now();
    funcParam();
    let t2=Date.now();
    return t2-t1;
}
console.log(funcRuntime(looper))

const addNum=num=>num+2;
const checkConsistentOutput=(funcparam,val1,val2)=>{
    let firstValue=funcparam(val1);
    let secondValue=funcparam(val2);
    if (firstValue===secondValue){
        return `The out is consistent`
    }
    else{
        return `Output is not consistent`
    }
}
console.log(checkConsistentOutput(addNum,2,3));

