let testArray = [1, 2, 3, 4, 5, 6];
// using anonymous function declaration
testArray.forEach(function (element) {
    console.log(element * 2 + " --- used anonymous function declaration")
})


//  using arrow functions

testArray.forEach((element) => {
    console.log(element + "----- used arrow functions")
})


// using named functions

const logElements = element => {
    console.log(element + "---- used named function")
}

testArray.forEach(logElements)