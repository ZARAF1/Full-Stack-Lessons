/*
.pad() takes two arguments: a string and a length
.pad() adds spaces evenly to both sides of the string to make it reach the desired length
Extra padding is added to the end of the string if an odd amount of padding is required to reach the
specified length
Your method does not need to accept the additional chars parameter; we will only add space characters to
 pad our string
* */

// lodash library solution
let _ = require('lodash');
console.log(_.pad('hello', 9));

// my solution

const pad=(str, length)=>{
    if(length<=str.length){
        return str;
    }

    else if (length>str.length) {
        totalLengthToAdjust = length - str.length;
    }

    if (totalLengthToAdjust%2===0){
        sideLength=totalLengthToAdjust/2;
        return ' '.repeat(sideLength)+ str + ' '.repeat(sideLength)
    }
    else if (totalLengthToAdjust%2===1){
        lengthLow = Math.floor(totalLengthToAdjust/2);
        lengthHigh= totalLengthToAdjust - lengthLow;
        return ' '.repeat(lengthLow)+str+' '.repeat(lengthHigh)
    }
}

console.log(pad('hi',7))