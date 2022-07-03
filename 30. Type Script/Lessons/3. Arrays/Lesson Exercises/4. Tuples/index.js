// Example 1
var ourTuple = ['Is', 7, 'our favorite number?', false];
//Example 2
var numbersTuple = [1, 2, 3, 4]; // Type Error! numbersTuple should only have three elements.
var mixedTuple = ['hi', 3, true]; // Type Error! The first elements should be a number, the second a string, and the third a boolean.
//Example 3
var tup = ['hi', 'bye'];
var arr = ['there', 'there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple
// Exercise
var favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];
favoriteCoordinates[6] = -6.825; // throws an error The whole point of tuples is that they have fixed lengths, so you
// cannot access elements of favoriteCoordinates with indices greater than 5. Even when you want to!?
