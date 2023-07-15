/* Example 1 */

const numbers=[1,2,3,4,5];
const biggerNumbers=numbers.map(element=>{
    return element*10;
})
console.log(biggerNumbers);

/* Example 2 */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(element=>{
    return element[0];
})

console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(element=>{
    return element/100;
})
console.log(smallNumbers)