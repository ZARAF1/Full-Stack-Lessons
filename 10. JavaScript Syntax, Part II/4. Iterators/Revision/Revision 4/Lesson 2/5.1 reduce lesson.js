const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue)=>{
    console.log('The value of accumulator:'+ accumulator);
    console.log('The value of currentValue: '+ currentValue);

    return accumulator + currentValue;

},10)
console.log('The total reduced value is '+ newSum)

// we can also multiply the accumulator to the current value as under
/*
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue)=>{
    console.log('The value of accumulator:'+ accumulator);
    console.log('The value of currentValue: '+ currentValue);

    return accumulator * currentValue;

},10)
console.log('The total reduced value is '+ newSum)

*/
