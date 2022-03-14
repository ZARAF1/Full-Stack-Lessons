/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in
 the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry
you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence);
// Should return ['This', 'will', 'all', 'make', 'sense.'];
Checkpoint
* */

const reverseArray=(arr)=>{
    let newArray=[];
   for ( let i=arr.length-1; i>=0;i--){
        newArray.push(i)
    }
   return newArray;
   
}

console.log(reverseArray([1,2,3]))

/*using reverse() which mutates original array even if we log it*/
//Careful: reverse is destructive -- it changes the original array.

const arr1=[8,9,10]
console.log(arr1.reverse())
console.log(arr1) //  mutated original array
//or
const array1 = ['one', 'two', 'three'];
let reversedArray=array1.reverse();
console.log("reversed array:", reversedArray)


