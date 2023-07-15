const _={
    clamp(number,lower,upper){
        lowerClampedValue = Math.max(number,lower);
        clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    }
};

console.log(_.clamp(4,3,10))



// Do not write or modify code below this line.
module.exports = _;