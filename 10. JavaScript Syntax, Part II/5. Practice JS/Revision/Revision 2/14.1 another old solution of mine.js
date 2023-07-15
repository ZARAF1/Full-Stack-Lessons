// We will break any number down into an array first
const breakNumToArray=num=>{
    let factArr=[]
    for (let i=num;i>=1;i--){
        factArr.push(i)

    }
    return factArr;
}

console.log(breakNumToArray(6))

// we will now find the factorial using our own function baby
let arrayForFactorial=breakNumToArray(6)
let currentValue=1;
let factorial=(arr)=> {
    for (let i = arr.length - 1; i >= 0; i--) {
        // if (arr.indexOf(arr[i])>=arr.indexOf(arr[0])){
        if (i>=0){
            currentValue=currentValue*arr[i]
        }
    }
}

factorial(arrayForFactorial)
let factorialValue=currentValue;
console.log(factorialValue)
