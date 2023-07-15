const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = arr.slice(1, 3)
let arr3 = arr.slice(-1)
let arr4 = arr.slice(4, -2)
console.log(arr2);
console.log(arr3)
console.log(arr4)


// splice

let testSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(testSplice.length) //9
testSplice.splice(1, 2, 10, 11, 12);
console.log(testSplice)
