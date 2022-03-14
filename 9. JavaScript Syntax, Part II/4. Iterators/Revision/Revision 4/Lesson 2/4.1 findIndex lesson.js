const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(element=>{
    return element==='elephant';
})

const startsWithS = animals.findIndex(element=>{
    return element.startsWith('s');
})

console.log(startsWithS)