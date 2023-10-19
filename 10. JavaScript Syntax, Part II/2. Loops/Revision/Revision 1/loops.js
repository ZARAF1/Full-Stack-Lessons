// for loop
for (let i = 0; i <= 3; i++) {
  console.log(i);
}
// for loop over strings
let str = 'Hello World';
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// for loop over array
let arr = [1, 2, 3, 'a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in loop over array
for (let idx in arr) {
  console.log('for in >> ' + arr[idx]);
}

// for of loop over array
for (let elem of arr) {
  console.log('for of >>> ' + elem);
}

// for loop in reverse

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// for loop in reverse over array

for (let i = arr.length - 1; i >= 0; i--) {
  console.log('reverse for loop over array >>>> ' + arr[i]);
}

// nested loops

const myArr = [19, 20, 30];
const yourArr = [20, 19, 50];

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < yourArr.length; j++) {
    myArr[i] === yourArr[j]
      ? console.log(yourArr[j])
      : console.log(myArr[i] + ':' + yourArr[j]);
  }
}
