let arr = [1, 2, 3, 4, 5];

//passing callback to foreach as function declaration

arr.forEach(function (element) {
    console.log(`Element is ${element}`)
})

// passing callback as arrow function
arr.forEach(element => {
    console.log(element)
})

// passing callback as function name

let newArr = [];

function printElements(element) {
    newArr.push(element * 2)
}


arr.forEach(printElements);

console.log(newArr)


