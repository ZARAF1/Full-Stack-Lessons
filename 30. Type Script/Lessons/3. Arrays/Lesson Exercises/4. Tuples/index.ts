// Example 1
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false];

//Example 2
let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean.

//Example 3
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple

// Exercise
let favoriteCoordinates:[number,number,string,number,number,string] = [40, 43.2, 'N', 73, 59.8, 'W'];
favoriteCoordinates=[17,45,'N',142,30,'E'];
favoriteCoordinates[6]=-6.825; // throws an error The whole point of tuples is that they have fixed lengths, so you
// cannot access elements of favoriteCoordinates with indices greater than 5. Even when you want to!?
