/*

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6);
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
Assume only positive numbers will be given as an argument for the factorial() function.* */


const factorial=num=>{
    let factArr=[]
    for (let i=num;i>=1;i--){
        factArr.push(i)

    }
    let result=factArr.reduce((accumulator,currentValue)=>{
        console.log('The value of accumulator: ', accumulator);
        console.log('The value of currentValue: ', currentValue);
        return accumulator*currentValue
    })
    return `The factorial of ${num} is ${result}`;
}

console.log(factorial(6))
