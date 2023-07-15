const num = [10,2,3,4,5,6]

const lessThanThree=num.findIndex(element=>{
    return element<2;
})
console.log(lessThanThree)

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

console.log(lessThanTen)