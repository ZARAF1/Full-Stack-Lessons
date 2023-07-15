Arrays¶
Arrays are an ordered list-like object where the members of the array can be accessed by their index number.
    The array length is not fixed and the arrays support different types of members, even in the same array.
    The array objects have mutating and non-mutating methods to edit the arrays. To create an array, simply declare
and define a variable with brackets:

An empty array:

    let emptyArray = [];
An array with contents:

let arrayWithContents = ["Strings", "inside", "an", "array"];
The array contents can be accessed using the bracket notation (indices start from 0):

arrayWithContents[1]; // "inside"
Iterating over arrays
The traditional method of iterating over an array is to use a for loop:

for (let i=0; i<arrayWithContents.length; i++) {
    console.log(arrayWithContents[i]);
}
But as it can be seen, the for loop is a bit cumbersome for most intents and purposes.Most of the time when looping
over an array, we want to iterate over all the items one-by-one and we have no real need for the index apart from
retrieving the actual value from the array.

    for…in
A construct that eliminates the need to specify that we want to iterate over all the items one-by-one
is known as for-in in JavaScript. In some languages the for...in will actually iterate over the values,
but in JavaScript it will iterate over the indices and you still have to spicify what to do with
    the index:

    for (let idx in arrayWithContents) {
        console.log(arrayWithContents[idx]);
    }
for…of
To completely get rid of the index inside the loop body, we have a construct called for...of which will
iterate over the values instead of the indices.
    In addition, this can be used with non-enumerated data types where indices do not make sense:

    for (let val of arrayWithContents) {
        console.log(val);
    }