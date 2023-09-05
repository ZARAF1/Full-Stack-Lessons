// for loops
for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 11; i += 2) console.log(i);
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + '--->>> even number');
  }
}
for (let i = 10; i >= 0; i--) console.log(i);

let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);

// while loop
// example 1
let idx = 0;
while (idx < 10) {
  console.log(idx);
  idx += 3;
}

// example 2
let rappers = new Array('topi', 'mopi', 'jopi');
let currentRapper;
while (currentRapper !== 'jopi') {
  currentRapper = rappers[Math.floor(Math.random() * rappers.length)];
  console.log(currentRapper);
}

// do while
let spoonsNeeded = 0;
let spoonsAdded = 0;
do {
  console.log('No more monkeys jumping on the bed');
} while (spoonsAdded < spoonsNeeded);

// for in loop
for (let idx in rappers) {
  console.log(rappers[idx]);
}

// for of

for (let element of rappers) {
  console.log(element);
}

// just testing stuff not related to the above
// let str = 'yo the string';

// let newSplitArray = str.split(' ');
// console.log(newSplitArray);
