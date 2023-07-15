const arr1=['a','b','c'];
arr1.unshift(0,1,'abc')
// adds item to the beginning of the array similar to push
// which adds items to the end
console.log(arr1)

// removes an element from the start of the array
arr1.shift()
console.log(arr1)

// stores the removed element in a variable
let arr2=arr1.shift()
console.log(arr2)