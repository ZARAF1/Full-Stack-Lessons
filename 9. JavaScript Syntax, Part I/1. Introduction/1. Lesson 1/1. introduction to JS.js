/****** Commenting **/
// single line comment
/*
Multi line comment*/
/*

/****** Different data types **/
// strings
// boolean
// numbers
// undefined
// Null
// NaN
// symbol
// object
// */

//const logBlacklistError = require('gulp-cli/lib/shared/log/blacklist-error');

/* string properties and methods*/
const str = 'hello i am a string';

// determine length of a string
const stringsLength = str.length;
console.log('Length of the string is ' + stringsLength);
console.log('Length of another string is ' + 'this is another string'.length);

// operation being stored in a variable
const upperText = str.toUpperCase();
console.log(upperText + '<<<< converted to uppercase');

// uppercase on the variable holding the string

console.log(str.toUpperCase());
console.log(str.startsWith('h'));
console.log(str.length);

// another way directly on the string

console.log('hello'.toUpperCase());
console.log('hello'.startsWith('h'));

// builtin objects

console.log(Math.floor(Math.random() * 50));
let storeVar = Math.floor(Math.random() * 5);
console.log(storeVar);
// method to remove white spaces from the beginning and end of text
console.log(
  '        This will remove whitespaces from the freakish text      '.trim()
);

// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log('Hello World'.charCodeAt(1));

const index = 3;
const txt = 'Hello World';
console.log(
  `The character at index: ${index} is ${txt.charAt(
    index
  )} while the character code for it is ${txt.charCodeAt(index)}`
);

const newArray = [1, 23, 2, 4, 5];
console.log(newArray.length);

newArray.forEach(element => {
  console.log(element);
});
