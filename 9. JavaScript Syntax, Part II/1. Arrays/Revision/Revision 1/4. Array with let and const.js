// arrays created with let can be reassigned and are mutable

let arr1=[1,2,3,4]
console.log(arr1)

//finding out the length of array
console.log(arr1.length)

//adding an item to the end of the array
arr1[4]=5;
console.log(arr1)

//reassigning the array
arr1=[7,8,9]
console.log(arr1)

//creating an array using const
const arr2=['a','b','c'];

//const array are mutable hence we can update or add or delete array elements but re-assignment is not possible
arr2[0]='d';
console.log(arr2)

arr2[3]='a';
console.log(arr2)


//reassigning an array declared with const throws error TypeError: Assignment to constant variable.
arr2=[0,1]
console.log(arr2)