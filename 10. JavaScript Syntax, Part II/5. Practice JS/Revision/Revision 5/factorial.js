/*

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6);
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
Assume only positive numbers will be given as an argument for the factorial() function.* */

const factorial = num => {
    let factorialArray = [];
    for (let i = num; i > 0; i--) {
        factorialArray.push(i)
    }
    return factorialArray.reduce((acc, cv) => {
        return acc * cv;
    })
}

console.log(factorial(6))