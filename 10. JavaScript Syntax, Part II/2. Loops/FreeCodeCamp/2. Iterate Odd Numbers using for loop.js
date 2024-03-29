/*Iterate Odd Numbers With a For Loop
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.*/

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// ourArray will now contain [0,2,4,6,8]. Let's change our initialization so we can count by odd numbers.
console.log(ourArray);
// Another example

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArray.push(arr[i]);
  }
}
console.log(evenArray);

let oddArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    oddArray.push(arr[i]);
  }
}
console.log(oddArray);
