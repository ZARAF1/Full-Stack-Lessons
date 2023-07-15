// returns a portion of the array starting from the provided index (included) till the end.


let arr=[1,2,3,4,5,6]
let arr1=arr.slice(2)
console.log(arr1)

// we can also supply an end index but the element at the index is not included. in example below the
// array starts at index 2 while ends at 5 but doesnt include the element at index 5
let arr2=arr.slice(2,5)
console.log(arr2)