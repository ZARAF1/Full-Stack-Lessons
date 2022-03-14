/*
.inRange() takes three arguments: a number, a start value, and an end value
.inRange() checks to see if the provided number falls within the range specified by the start and end
values
If the provided number is smaller than the start value, .inRange() will return false
If the provided number is larger than or equal to the end value, .inRange() will return false
If the provided number is within the start and end values, .inRange() will return true
If no end value is provided to the method, the start value will be 0 and the end value will be the
provided start value
If the provided start value is larger than the provided end value, the two values should be swapped
* */

// lodash documentation
let _=require('lodash');
console.log(_.inRange(10,5,10))


// my solution
const inRange=(number, start, end)=>{
    if(end===undefined){
    end =start;
    start=0;
    }

    if (number<start || number>=end){
        return false;
    }
    else if (number>=start && number<end){
        return true;
    }
}
console.log(inRange(2,5))