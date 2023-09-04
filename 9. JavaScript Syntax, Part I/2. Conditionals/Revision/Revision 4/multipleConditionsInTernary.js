const testFunction = (a, b) => {
  return a === b
    ? 'a and b are equal'
    : a < b
    ? `${a} is lesser than ${b}`
    : `${b} is lesser than ${a}`;
};
console.log(testFunction(2, 2));
