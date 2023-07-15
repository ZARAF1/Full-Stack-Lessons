/* anonymous function example arrow and function declaration*/

// 1. using arrow functions
const numberArray= [1,2,3,4,5];
const bigNumbersArray=numberArray.map(element=>{
    return element * 10;
})
console.log(bigNumbersArray)

// 2. using function declaration
const bigNumber=numberArray.map(function(element){
    return element *5
})

console.log(bigNumber)


// using named functions

function multiplyNumbers (element){
    return element * 20;
}

const newNumbersArray=numberArray.map(multiplyNumbers)

console.log(newNumbersArray)


//// from lesson

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(element=>{
    return element[0]
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(element=>{
    return element/100
})

console.log(smallNumbers)