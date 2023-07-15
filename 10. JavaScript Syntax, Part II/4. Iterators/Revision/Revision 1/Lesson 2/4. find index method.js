//returns index of first match
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

let indexOfAnimal=animals.findIndex(element=>{
    return element.startsWith('s')
})
console.log(indexOfAnimal)

