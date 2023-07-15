const numArr=[1,2,3,4];
console.log(numArr.some(element=>{
    return element<3
}))

const resultArr=numArr.filter(element=>{
    return element<3
})

console.log(resultArr)