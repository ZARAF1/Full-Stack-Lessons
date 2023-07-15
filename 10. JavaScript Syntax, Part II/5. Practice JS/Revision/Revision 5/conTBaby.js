const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
let newArr = []
const convertToBaby = arr => {

    for (let animal of arr) {
        newArr.push(`Baby ${animal}`)
    }
}
convertToBaby(animals)
console.log(newArr)

