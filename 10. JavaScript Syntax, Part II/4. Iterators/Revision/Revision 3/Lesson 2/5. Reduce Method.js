const numArray=[1,2,3,4,10];
const summedNumbers=numArray.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})
console.log(summedNumbers)
// giving a second optional ***** parameter *****

const numTotal=numArray.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},1000)

console.log(numTotal)

// creating my own method that reduces an array
function reduceArray (arr){
    let summedTotal=0;// increase this as accumulator 
    for (let i=0;i<arr.length;i++){
        summedTotal=summedTotal+arr[i]


    }

    console.log(summedTotal)
}
reduceArray(numArray)