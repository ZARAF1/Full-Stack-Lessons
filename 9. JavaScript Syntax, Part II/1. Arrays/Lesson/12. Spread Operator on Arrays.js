// declare two arrays and a string to understand spread

const arr = [1,2,3,4]
const arr2 = [5,6,7,8,9]
const word = 'test';


/*The spread operator unpacks an array into separate arguments:*/
console.log("Unpack an array into separate arguments: ")
console.log(...arr)
console.log([...arr])

const test =

/*These operations are not only available for arrays but also other iterables like strings:*/
console.log("These operations are not only available for arrays but also other iterables like strings:")
console.log(...word);
console.log([...word])


/*To copy an array*/
//example 1
const copiedArray=[...arr]
console.log("We can copy arrays like")
console.log("Copied array is :")
console.log(copiedArray)

//example 2
console.log("using spread to copy an two arrays in one array")
const newArray=[...arr,...arr2]
console.log(newArray)

// example 3
const assignedArray=arr
console.log("Assigned array is :")
console.log(assignedArray)

// example 4 great way to clone
const clonedArray = [0, ...arr, 5];
console.log("Cloning an array:")
console.log(clonedArray);

/*This comes in handy when a function expects a list of arguments and all you have is an array:*/

console.log(Math.max(...arr2))
