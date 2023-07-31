let stringOne = "This is a string";

// length of a string
let stringOnesLength = stringOne.length;
console.log(stringOnesLength)
console.log("hello".length)

// slice a string
// Javascript counts position from 0

let stringSlicedUp = stringOne.slice(0, 7) //  stringOne.slice(1, 7) gives us "his is"
console.log(stringSlicedUp)

//// If you omit the second parameter, the method will slice out the rest of the string
let stringSlicedUpAgain = stringOne.slice(7);
console.log(stringSlicedUpAgain)


//// single negative value in slice starts counting from -1 from last character of string and included the character specified;

let negativeSliced = stringOne.slice(-6)
console.log(negativeSliced)