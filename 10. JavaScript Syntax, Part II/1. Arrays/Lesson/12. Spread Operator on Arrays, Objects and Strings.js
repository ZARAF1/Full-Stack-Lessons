/**** Spread operator is used to spread an array, object or strings */
// 1. ARRAYS: spread can be used to spread each value or copy an array to another array with same or additional values.

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

/*The spread operator unpacks an array into separate arguments:*/

console.log('Unpack an array into separate arguments: ');
console.log(...arr); // unpacking single array
console.log(...arr, ...arr2); // unpacking two arrays

/*To copy/clone an array*/

// Before we used to just reference an array to copy it but there was a problem as changing the copied array changed the original array example below

// Example testing whether changing the copied array changes the original array ?

const originalArr = [10, 11, 12, 13, 14, 15, 16];
const copiedArr = originalArr;

copiedArr[0] = 556;
console.log({ copiedArr });
console.log({ originalArr }); //let copiedArr = originalArr; changes the original array as well

// Cloning Arrays
//example 1 // copying
const copiedArray = [...arr];
console.log('We can copy arrays like');
console.log('Copied array is :');
console.log(copiedArray);

//example 2 // merging arrays
console.log('using spread to copy two arrays in one array');
const newArray = [...arr, ...arr2];
console.log(newArray);
// or
console.log([...arr, ...arr2]); // copying two arrays into a separate array and consoling it rather saving it to a variable

// example 3 cloning with other values
const worded = 'Hello';
const clonedArray = [0, ...arr, 5, ...worded];
console.log('Cloning an array:');
console.log(clonedArray);

// Example 4 // using it on functions which accept multiple values
let arrayOfItems = [5, 6, 7, 8, 9, 1001, 1, 2, 3, 4];
const highestNumberInArray = Math.max(...arrayOfItems);
console.log({ highestNumberInArray });
console.log('Math Max: ' + Math.max(1, 2, 3, 4, 5));

const lowestNumberInArray = Math.min(...arrayOfItems);
console.log(lowestNumberInArray);

/* OBJECTS */

/*
The spread operator (…) with objects is used to create copies of existing objects with new or updated values or to make
a copy of an object with more properties. Let’s take an example of how to use the spread operator on an object.
Here we are spreading the user object. All key-value pairs are copied into the clonedUser object.
*/
// Example 1:
const user = {
  name: 'Max',
  age: 42,
};

const clonedUser = { ...user };
console.log(clonedUser);

// Example 2:
// The spread syntax is useful for merging the properties and methods on objects into a new object:

let objectX = { x: 1 };
let objectY = { y: 2 };
let objectXY = { ...objectX, ...objectY, z: 3 };
console.log(objectXY);

// Example 3: using spread to create a string as the values of an object
const stringText = 'Hello World';
console.log({ ...stringText });

// Example 4: using an array to create an object

let arr5 = [1, 2, 3, 'a', 'b', 'c'];
let newObject = { ...arr5 };
console.log(newObject);

/*** Using strings */

let newString = 'Heard It';
console.log(...newString);
console.log({ ...newString });
console.log([...newString]);
