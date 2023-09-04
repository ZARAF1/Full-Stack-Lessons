/*Logical AND ( && ) */
// logical && (both conditions should evaluate to true for the code to execute)
let stoplight = 'green';
let bypassers = 0;

if (stoplight === 'green' && bypassers === 0) {
  console.log('go');
} else {
  console.log('stay');
}

// using above example with ternary operator
stoplight === 'green' && bypassers === 0
  ? console.log('go man go')
  : console.log('stop man stop');
console.log(stoplight === 'green' && bypassers === 0);
console.log()'>>>');

/*logical OR ( || )*/
// only one condition should evaluate to true for the entire condition to evaluate to true
let shouldDrive = stoplight === 'red' || bypassers > 0;
if (shouldDrive) {
  console.log('go now');
} else {
  console.log('stay then');
}

// above example in ternary
stoplight === 'red' || bypassers >= 1
  ? console.log('stop man bas')
  : console.log('go man nikalein');

/*logical not (!)*/
// reverse boolean condition
let excited = false;
console.log(!excited);

// IMPORTANT Logical AND can be replaced by using nesting one if into another
function testLogicalAnd(val) {
  // Only change code below this line

  if (val > 2) {
    if (val < 10) {
      return `Yes ${val} is between 2 and 10`;
    }
  }

  // Only change code above this line
  return 'No its outside than 2 and 10';
}

console.log(testLogicalAnd(9));

// IMPORTANT Logical OR can be used like this by placing if one after the other
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20) {
    return 'Outside';
  }

  if (val < 10) {
    return 'Outside';
  }

  // Only change code above this line
  return 'Inside';
}

console.log(testLogicalOr(25));
