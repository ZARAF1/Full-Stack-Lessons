const randomNumbers = [375, 200, 3.14, 7, 13, 852];

let numbers= randomNumbers.filter(element=>{
    return element < 100
})

console.log(numbers)