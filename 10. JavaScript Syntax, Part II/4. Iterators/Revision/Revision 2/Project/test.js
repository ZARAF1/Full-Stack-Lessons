let arr=[1,2,3,4,5,6,7,8,7,9,0]

let overNumbers=[4,7,9]

let betterNumbers=arr.filter(element=>{
    return !overNumbers.includes(element)
})
console.log(betterNumbers)