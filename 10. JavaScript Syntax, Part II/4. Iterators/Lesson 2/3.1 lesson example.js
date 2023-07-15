const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage=animals.map(
    element=>{
        return element[0];
    }
)
console.log(secretMessage.join(''))


/// another example

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers=bigNumbers.map(
    element=>{
        return element/100;
    }
)
console.log(smallNumbers)