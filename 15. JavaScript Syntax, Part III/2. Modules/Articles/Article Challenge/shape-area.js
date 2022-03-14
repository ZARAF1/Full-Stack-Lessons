/*
Code Challenge
Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

circleArea(radiusLength).
squareArea(sideLength).
You may create these as either named functions or anonymous function expressions.

Hint

You can calculate the area of a circle based on its radius like so:
PI * radius * radius
* */

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength){
    return PI*radiusLength*radiusLength;
};
function squareArea(sideLength){
    return sideLength*sideLength;
};

module.exports.circleArea=circleArea;
module.exports.squareArea=squareArea;
