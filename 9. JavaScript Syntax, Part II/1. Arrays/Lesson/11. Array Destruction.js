const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
console.log(suv);

// array destruction is best when used in functions

const calculator = (val1, val2) => {
    const add = val1 + val2;
    const subtract = val1 - val2;
    const divide = val1 / val2;
    const power = val1 ** val2;
    return [add, subtract, divide, power]
}
console.log(calculator(10, 2))
const [add, subtract, divide, power] = calculator(10, 2)
console.log(add, subtract, divide, power)