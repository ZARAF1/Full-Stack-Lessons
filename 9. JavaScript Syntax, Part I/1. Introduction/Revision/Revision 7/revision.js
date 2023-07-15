let stringExample = "This is a string";
console.log("The string printed " + stringExample);
console.log("stringExample's length is " + stringExample.length)

let stringExamplesLength = stringExample.length;
console.log(stringExamplesLength)

/*Slicing a string*/
const stringOne = "A new String";
const slicedStringOne = stringOne.slice(0, 4);
const slicedStringTwo = stringOne.slice(0);
const slicedStringThree = stringOne.slice(-6)
const slicedStringFour = stringOne.slice(-6, -10)
console.log(slicedStringOne) // 0 is included and 4 character is omitted
console.log(slicedStringTwo)
console.log(slicedStringThree)
console.log(slicedStringFour)
console.log({slicedStringOne}) // nice way

console.log(stringOne.slice(0, -5))
console.log("hello".slice(0, -2))