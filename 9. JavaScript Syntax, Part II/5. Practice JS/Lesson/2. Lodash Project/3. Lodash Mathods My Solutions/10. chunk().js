/*
.chunk() takes two arguments: an array and a size
.chunk() breaks up the supplied array into arrays of the specified size
.chunk() returns an array containing all of the previously-created array chunks in the order of the original array
If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
If no size is supplied to the method, the size is set to 1
*/

let _ = require('lodash');

// lodash solution

let myArr=[1,2,3,4,5,6,7,8,9];

console.log(_.chunk(myArr,2))

// my solution
const chunk=(array,size)=>{
    if (size===undefined){
        size=1;
    }
    arrayChunks=[];

    for (let i=0;i<array.length;i+=size){
        let arrayChunk=array.slice(i,i+size);
        arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
}
console.log(chunk(myArr,2))