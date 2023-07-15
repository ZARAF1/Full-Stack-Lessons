/*Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in
.filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of
 your own!*/

// Write your code here:

const justCoolStuff = (arr1, arr2) => {
    return arr1.filter(x => {
        return arr2.filter(y => {
            return x === y;
        })
    })
}

let array1 = ['this', 'not this', 'nor this'];
let array2 = ['thing 1', 'thing 2', 'this'];

console.log(justCoolStuff(array1, array2))