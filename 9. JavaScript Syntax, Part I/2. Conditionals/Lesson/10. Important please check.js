// destructing arrays

const vehicle = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicle;
const [bar, , buv] = vehicle;
console.log(car, truck, suv)
console.log(buv)

// better usage is when using function

// a function returns an array which is used for destructing

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7); // because it returns an array
console.log({add}, {subtract}, {multiply}, {divide})

