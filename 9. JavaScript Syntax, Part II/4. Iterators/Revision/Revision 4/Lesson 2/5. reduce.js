const numbers = [1, 2, 4, 10];
const summedNumbers = numbers.reduce((accumulator,currentVal)=>{
    return accumulator+currentVal;
})
console.log(summedNumbers)