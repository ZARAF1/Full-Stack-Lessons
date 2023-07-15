// example 1
const numbers = [1, 2, 4, 10];
const summedNumber= numbers.reduce((acc,val)=>{
    return acc+val
})
console.log(summedNumber)

// example 2
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue)=>{
    console.log('The value of accumulator:'+ accumulator);
    console.log('The value of currentValue: '+ currentValue);

    return accumulator * currentValue;

},10)
console.log(newSum)
