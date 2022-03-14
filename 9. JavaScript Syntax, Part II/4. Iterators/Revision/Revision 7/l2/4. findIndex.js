const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const elephantIndex = animals.findIndex(animal=>{
    return animal==="elephant"
})
console.log(elephantIndex)

let funcparam=function (animal){
    return animal.startsWith('s')
}
const startWithSIndex= animals.findIndex(funcparam)
console.log(startWithSIndex)