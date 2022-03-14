// map method return a new array it takes a call back function as an argument

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
let secretMessage = animals.map(element=>{
    return element[0]
})
console.log(secretMessage.join(''))

let animalList=animals.map(element=>{
    return element.startsWith('l')
})
console.log(animalList)

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers=bigNumbers.map(
    element=>{
        return element/100;
    }
)
console.log(smallNumbers)