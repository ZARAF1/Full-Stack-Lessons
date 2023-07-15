function calcArea(width, height) {
    return width * height;
}

console.log(calcArea(10, 5))

// another example
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4); // storing the return value of the call in a variable
const numberOfMonitors = monitorCount(4, 5) * 2 // we can also do this
console.log(numOfMonitors, numberOfMonitors) // printing the variables