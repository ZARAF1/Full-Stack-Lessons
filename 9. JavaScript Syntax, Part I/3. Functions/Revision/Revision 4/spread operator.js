/*Spread Operator Arrays*/

/*
The spread operator unpacks iterables into individual elements. Let’s look into different scenarios when this is useful.
The spread operator unpacks an array into separate arguments:
*/

const arrayOfItems = [1, 2, 3, 4, 5, 6];
console.log(...arrayOfItems);

// This comes in handy when a function expects a list of arguments and all you have is an array:

const highestNumberInArray = Math.max(...arrayOfItems);
console.log(highestNumberInArray);

const lowestNumberInArray = Math.min(...arrayOfItems);
console.log(lowestNumberInArray);

//To copy an array we put the spread values into another array:
// This is a great way of cloning arrays. If we do changes to either of the arrays they will not affect the other.

const arrayA = [3, 2, 1];
const arrayB = [...arrayA];
console.log(arrayB)

//The spread syntax can also be used to compose several values into one:
const arrayC = ["A", "B", "C"]
const arrayD = [...arrayA, "Hello", ...arrayC];
console.log(arrayD)

//Merging Arrays
const newArray1 = ['this', 'is', 'a'];
const newArray2 = ['newly', 'merged', 'array'];
const mergedArray = [...newArray1, ...newArray2];
console.log(mergedArray)

//These operations are not only available for arrays but also other iterables like strings:

let testString = "hello";
console.log(...testString);


/* OBJECTS */

/*
The spread operator (…) with objects is used to create copies of existing objects with new or updated values or to make
a copy of an object with more properties. Let’s take an example of how to use the spread operator on an object.
Here we are spreading the user object. All key-value pairs are copied into the clonedUser object.
*/

const user = {
    name: 'Max',
    age: 42
};

const clonedUser = {...user};
console.log(clonedUser)

// The spread syntax is useful for merging the properties and methods on objects into a new object:

let objectX = {x: 1};
let objectY = {y: 2};
let objectXY = {...objectX, ...objectY, z: 3};
console.log(objectXY)

