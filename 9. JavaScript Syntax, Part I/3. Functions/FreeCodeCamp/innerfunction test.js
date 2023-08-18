function outerFunction() {
  let outerVariable = "Hello from outer";

  return function () {
    return "Hello from inner" + outerVariable;
  };
}

// The outerFunction returns a function that will be assigned to innerFunction
let innerFunction = outerFunction(); // the return value of the function will be stored in innerFunction that is why innerFunction has to be called like a function

// Inner function references to "outerVariable"
// but does outerVariable still exist at the time
// innerFunction is called?
console.log(innerFunction());
