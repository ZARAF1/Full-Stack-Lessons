const factorial = (num)=>{
    let factorialResult=1;
    for (let i=1;i<=num;i++){
        factorialResult*=i
        console.log(factorialResult)
    }
    return factorialResult
}

console.log(factorial(6))