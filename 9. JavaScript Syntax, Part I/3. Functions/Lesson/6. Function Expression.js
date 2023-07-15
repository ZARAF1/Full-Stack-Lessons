/*
* Another way to define a function is to use a function expression.
* To define a function inside an expression, we can use the function keyword.
* In a function expression, the function name is usually omitted.
* A function with no name is called an anonymous function.
* A function expression is often stored in a variable in order to refer to it.
*/

const calculateArea = function (width, height) {
    const area = width * height;
    return area;
}
console.log(calculateArea(15, 10))

// another example
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}
console.log(plantNeedsWater('Tuesday'));


const multiplyNumbers = function (val1, val2) {
    return val1 * val2;
}

console.log(multiplyNumbers(5, 2))


