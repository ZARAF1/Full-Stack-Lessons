/*Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in
.filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of
 your own!*/

// Write your code here:

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff=(arr1,arr2)=> {
    return arr1.filter(element =>{ // return should be used if we are using {}
        return arr2.includes(element)} // return should be used if we are using {}. we can take away {} and
        // let implicit return work if only one line of code exists
    )
}





// Feel free to uncomment the code below to test your function

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

