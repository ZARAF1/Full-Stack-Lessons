// Write function below
function isEven(number) {
    let remainder = number % 2
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4))

//another example

const isNumberEven = num => {
    return num % 2 === 0
}
console.log(isNumberEven(3))