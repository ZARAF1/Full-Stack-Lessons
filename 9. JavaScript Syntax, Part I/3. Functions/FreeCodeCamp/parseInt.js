/*
Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:
* */
var a = parseInt("007");
//The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
console.log(a)



function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");