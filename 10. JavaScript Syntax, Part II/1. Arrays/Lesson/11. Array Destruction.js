const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
console.log(suv);
console.log(truck);

const testArray = ['a', 'b', 1, 2];
const [arrE1, arrE2, arrE3, arrE4] = testArray;
console.log(arrE1, arrE2);
console.log(testArray);

// array destruction is best when used in functions

const calculator = (val1, val2) => {
  const add = val1 + val2;
  const subtract = val1 - val2;
  const divide = val1 / val2;
  const power = val1 ** val2;
  return [add, subtract, divide, power];
};
console.log(calculator(10, 2)); // returns an [ 12, 8, 5, 100 ]

const [adder, subtract, divide, power] = calculator(10, 2); // we destruct the returned array
console.log(adder, subtract, divide, power);

// Solution 2

const testCalc = (val1, val2) => {
  let add = val1 + val2;
  let sub = val1 - val2;
  return [add, sub];
};

let [addition, subtraction] = testCalc(10, 2);
console.log(addition, subtraction);
