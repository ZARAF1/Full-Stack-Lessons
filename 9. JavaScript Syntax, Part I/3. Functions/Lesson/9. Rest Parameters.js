const combineAll = (str1, ...otherStrings) => {
  /*    let combinedString = str1;
        for (let str of otherStrings) {
            combinedString += str;
        }
        console.log(combinedString)
    */
  // console.log(otherStrings);
  let answer = str1;
  for (let str of otherStrings) {
    answer += str;
  }
  console.log(answer);
};

combineAll('h', 'e', 'l', 'l', 'o');

const sumAll = (...otherNumbers) => {
  let total = 0;
  for (let i = 0; i < otherNumbers.length; i++) {
    total += otherNumbers[i];
  }
  console.log(total);
};
sumAll(1, 2, 3, 4);

// another example

let tester;
let testRest = (item1, ...otherItems) => {
  tester = item1;
  for (let item of otherItems) {
    tester += item;
  }
  return tester;
};

console.log(testRest('h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd')); // undefinedhelloworld because tester has initial value of undefined
// to fix this we need to give tester an empty string value.
