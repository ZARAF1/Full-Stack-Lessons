// please note that truth vs falsy is different than true and false because truthy specifies whether a variable has been assigned a value

/** truth and falsy values **/
// NaN, null, undefined, "", 0, false will also result in Falsy statements
let var1 = '';
if (var1) {
  console.log('truthy');
} else {
  console.log('falsy');
}

/** Shortcut evaluation when using logical operators */
console.log(2 || 3); //when JavaScript evaluates an OR expression, if the first operand is true, JavaScript will not even look at the second operand in the short hand evaluation. So its 2
let val = 0 || (2 && 3); // 3  // 0, false, undefined, "", NAN, null will also result in false shortcut evaluation
console.log(val + ' is the value of val!');
// but then this might confuse you but dont be because truth vs falsy is different than true and false because truthy specifies whether a variable has been assigned a value
console.log(1 == true);
console.log(1 === true);

typeof val === 'number'
  ? console.log('number is true')
  : console.log('number is false');

// how to apply the above 1||2 example
let defaultName = '';
let name = defaultName || 'stranger';
console.log(name);

let defaulterName = '';
let namee;
if (defaulterName) {
  namee = defaulterName;
  console.log(namee);
} else {
  namee = 'Stranger';
  console.log(namee);
}

var person = {
  name: 'Jack',
  age: 34,
};
console.log(person.job); // undefined
console.log(person.job || 'unemployed'); // 'unemployed'
