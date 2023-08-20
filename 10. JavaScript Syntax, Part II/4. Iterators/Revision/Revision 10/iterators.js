let testArray = [1, 2, 3, 4, 5, 6];

// using anonymous functions
testArray.forEach(function (num) {
  console.log(`The number is ${num}`);
});

// using arrow anonymous function
testArray.forEach((element) => {
  console.log(element);
});

// using named function
const printElements = (elements) => {
  console.log("named function " + elements);
};
testArray.forEach(printElements);

// map method

const bigNumbers = testArray.map((element) => {
  return element * 10;
});

console.log(bigNumbers);

// filter method
