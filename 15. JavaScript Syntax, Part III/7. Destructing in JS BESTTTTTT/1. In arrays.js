let colors = ["blue", "green", "red"];
let [x, y, z] = colors;
console.log(x, y, z)
let [printX] = colors;
console.log(printX)


// Destructuring comes in handy when a function returns an array:
// Example
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

let [add, subtract, multiply, divide] = calculate(4, 7);
console.log("Sum: " + add)
console.log("Difference: " + subtract)