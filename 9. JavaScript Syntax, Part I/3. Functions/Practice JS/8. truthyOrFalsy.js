/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(),
that takes in any value and returns true if that value is truthy and false if that value is falsy.
* */

let var1;
const truthyOrFalsy =param=>{
    if (param){
        return true;
    }
    else {
        return false;
    }
}

console.log(truthyOrFalsy(var1))
console.log(truthyOrFalsy(""))
console.log(truthyOrFalsy(0))
console.log(truthyOrFalsy(null))
console.log(truthyOrFalsy(false))
console.log(truthyOrFalsy(1))

