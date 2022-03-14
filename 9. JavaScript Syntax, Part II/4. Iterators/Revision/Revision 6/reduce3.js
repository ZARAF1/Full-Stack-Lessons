const numbers = [1, 2, 4, 10];
let reduction=(acc,cVal)=>{
    return acc+cVal;
}
const summedNumber = numbers.reduce(reduction)
console.log(summedNumber)