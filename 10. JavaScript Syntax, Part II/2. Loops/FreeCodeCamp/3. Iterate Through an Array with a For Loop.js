// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total=0;
for (let i=0;i<myArr.length;i++){
    console.log(myArr[i])
    total+=myArr[i]
}
console.log(total)
// Only change code below this line

// another way to sum an array
let sum = 0;
for (let i=0;i<myArr.length;i++){
    sum +=myArr[i];
}
console.log(sum)