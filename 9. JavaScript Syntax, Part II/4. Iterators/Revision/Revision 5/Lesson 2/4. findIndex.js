// example 1
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});
console.log(lessThanTen)

// example 2
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(element=>{
    return element==='elephant';
})

const startsWithS = animals.findIndex(element=>{
    return element.startsWith('s');
})