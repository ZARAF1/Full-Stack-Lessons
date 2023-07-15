/*
Helper Functions
We can also use the return value of a function inside another function.
These functions being called within another function are often referred to as helper functions.
Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit,
we could write two functions like:
*/


function multiplyByNineFifth(number) {
    return number * (9 / 5);
}

function getFahrenheit(celsius) {
    return multiplyByNineFifth(celsius) + 32;
}

console.log(getFahrenheit(200));


// another example
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
