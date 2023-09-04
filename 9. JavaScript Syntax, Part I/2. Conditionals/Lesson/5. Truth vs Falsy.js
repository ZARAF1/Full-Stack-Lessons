// please note that truth vs falsy is different than true and false because truthy specifies whether a variable
// has been assigned a value

/** truth and falsy values **/
// NaN, null, undefined, "", 0, false will also result in Falsy statements
let var1 = NaN;
if (var1) {
  console.log('truthy');
} else {
  console.log('falsy');
}
console.log(2 || 3);
let val = 0 || (2 && 3); // 0 false undefined "" will also result in false shortcut evaluation
console.log(val + ' is the value of val!');
// but then this might confuse you
console.log(1 == true);
console.log(1 === true);

val === 'number'
  ? console.log('number is true')
  : console.log('number is false');

// how to apply the above 1||2 example
let defaultName = '';
let name = defaultName || 'stranger';
console.log(name);

let defaulterName = 'Ali';
let namee;
if (defaulterName) {
  namee = defaulterName;
  console.log(namee);
} else {
  namee = 'Stranger';
  console.log(namee);
}
