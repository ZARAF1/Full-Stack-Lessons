/*
.drop() takes two arguments: an array and a number representing the number of items to drop from
the beginning of the array
.drop() returns a new array which contains the elements from the original array, excluding the specified number
of elements from the beginning of the array
If the number of elements to drop is unspecified, your method should drop one element
*/

// lodash library solution
let _=require('lodash');
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
console.log(_.drop(names,2))


// my solution
const drop=(arr,number)=>{
    if (number===undefined) {
       number=1
    }
    let droppedArray  = arr.slice(number);
    return droppedArray
}
console.log(drop(names,2))


// another solution
let myArr=[1,2,3,4,5]
let name = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
const dropElements = (arr,number)=>{
    let newArr=[];
    if (number===undefined) {
        number=1
    }
    for (let i=0;i<arr.length;i++) {
        if (i >= number) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(dropElements(name,2))