let arr=[1,2,4,5,6,7];
let summedValue=arr.reduce((accumulator,value)=>{
    return accumulator+value
})
console.log(summedValue)

let arrNum=[1,2,4,5,6,7];
let sumValue=arr.reduce((accumulator,value)=>{
    return accumulator+value
},100)
console.log(sumValue)