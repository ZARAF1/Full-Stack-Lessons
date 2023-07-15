/*
The spread operator (…) with objects is used to create copies of existing objects with new or updated values or to
make a copy of an object with more properties. Let’s take an example of how to use the spread operator on an object.
Here we are spreading the user object. All key-value pairs are copied into the clonedUser object.
*/
const user = {
    name: 'Max',
    age: 42,
    crew: {
        captain: {
            name: "Ali"
        }
    }
};
const clonedUser = {...user};
console.log(clonedUser)

// The spread syntax is useful for merging the properties and methods on objects into a new object:
const x = {x: 1};
const y = {y: 2};

const coord = {...x, ...y, ...user};
console.log(coord);
