//
let numbersArray = [1,2,3,4,5];
let [a,s,d,f,g] = numbersArray;
console.log(g)
let [singleVal]=numbersArray;
console.log(singleVal)

// destruct array in a function
const destructArray=([a,s,d,f,g])=>{
    console.log(a,s,d,f,g)
}
destructArray(numbersArray)