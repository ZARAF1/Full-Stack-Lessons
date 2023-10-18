/*First Example*/

let animal = 'cat';
if (animal === 'dog') {
  console.log(`Pet the ${animal}`);
} else if (animal === 'moose') {
  console.log(`Pet the ${animal}`);
} else if (animal === 'cat') {
  console.log(`Pet the ${animal}`);
} else {
  console.log('Animal dont exist');
}

/*Second Example*/
let name = 'Bhall';
if (name === 'Bhalli') {
  console.log('Good friend in NZ');
} else if (name === 'Ali') {
  console.log('Me myself and I');
} else {
  console.log('Every one else');
}

/** Third Example */
let testIfElse = val => {
  if (
    typeof val === 'number' ||
    typeof val === 'string' ||
    typeof val === 'boolean'
  ) {
    console.log(`The value is ${val} and its type is ${typeof val}`);
  }
  console.log(`Unmatched value and type`);
};

testIfElse(undefined);
