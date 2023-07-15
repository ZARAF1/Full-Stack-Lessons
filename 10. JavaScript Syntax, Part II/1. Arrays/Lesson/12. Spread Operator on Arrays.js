// declare two arrays and a string to understand spread

const arr = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8, 9]
const word = 'test data';


/*The spread operator unpacks an array into separate arguments:*/
console.log("Unpack an array into separate arguments: ")
console.log(...arr) // unpacking single array
console.log(...arr, ...arr2)
console.log([...arr, ...arr2])


/*These operations are not only available for arrays but also other iterables like strings:*/
console.log("These operations are not only available for arrays but also other iterables like strings:")
console.log(...word);
console.log([...word])


/*To copy/clone an array*/

// Before we used to just reference an array to copy it but there was a problem as changing the copied array changed the original array example below

// Example testing whether changing the copied array changes the original array ?

const originalArr = [10, 11, 12, 13, 14, 15, 16];
const copiedArr = originalArr;

copiedArr[0] = 556
console.log({copiedArr})
console.log({originalArr}) //let copiedArr = originalArr; changes the original array as well

// Copy/ Cloning examples
//example 1
const copiedArray = [...arr]
console.log("We can copy arrays like")
console.log("Copied array is :")
console.log(copiedArray)

//example 2
console.log("using spread to copy two arrays in one array")
const newArray = [...arr, ...arr2]
console.log(newArray)

// example 3 cloning with other values
const worded = "Hello"
const clonedArray = [0, ...arr, 5, ...worded];
console.log("Cloning an array:")
console.log(clonedArray);

/*******
 * Using spread operator also comes in handy when a function expects a list of arguments and all you have is an array
 */

console.log(Math.max(...arr2))


