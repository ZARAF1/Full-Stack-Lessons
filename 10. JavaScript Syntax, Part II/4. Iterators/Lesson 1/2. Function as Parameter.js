let calculateFunctionRuntime = (func) => {
    let t1 = Date.now();
    func();
    let t2 = Date.now();

    return t2 - t1;
}

// passing a function
let arr = [1, 2, 3, 4, 5];

let loopOverArray = () => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i] + ' ' +
            'is value')
    }
}
console.log(calculateFunctionRuntime(loopOverArray))
/*


// passing an anonymous function

console.log(calulateFunctionRuntime(
    ()=>{
        for (let i=10;i>0;i--){
            console.log(i)
        }
    }

))

// lesson exercise
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

// Write your code below
let time2p2=timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

let checkConsistentOutput =(funcParam,val1,val2)=>{
    let firstCall=funcParam(val1);
    let secondCall=funcParam(val2);
    if (firstCall===secondCall){
        return firstCall
    }
    else
    {
        return `This function returned inconsistent results`
    }
}
console.log(checkConsistentOutput(addTwo,4,4))



*/
