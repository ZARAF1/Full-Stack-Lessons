/*.clamp() takes three arguments: a number, a lower bound, and an upper bound
    .clamp() modifies the provided number to be within the two provided bounds
If the provided number is smaller than the lower bound, it will return the lower bound as the final number
If the number is larger than the upper bound, it will return the upper bound as the final number
If the number is already within the two bounds, it will return the number as the final number*/

//from lodash library

let _=require('lodash');
console.log(_.clamp(3,4,6))


// my solution
const clamp=(number,lower,upper)=>{
    if (number<lower){
        return lower;
    }
    else if (number>upper){
        return upper;
    }
    else if(number>=lower && number<=upper){
        return number;
    }
}

console.log(clamp(6,4,9))

//codecademy solution
const clamped=(number,lower,upper)=>{
    let lowerClampValue = Math.max(number,lower);
    let clampedValue=Math.min(lowerClampValue,upper);
    return clampedValue
}
console.log(clamped(1,4,9))