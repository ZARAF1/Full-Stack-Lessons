const numbers = [1, 2, 4, 10];

const summedNums=numbers.reduce((acc,cval)=>{
    return acc+cval
})
console.log(summedNums)

const multipliedNum = numbers.reduce((acc,cval)=>{
    return acc*cval
})
console.log(multipliedNum)