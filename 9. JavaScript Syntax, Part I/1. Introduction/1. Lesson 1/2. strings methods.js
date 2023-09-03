let stringOne = 'This is a string';
console.log(stringOne);

/* LENGTH */

let stringOnesLength = stringOne.length;
console.log(stringOnesLength);
console.log('hello'.length);

/* SLICE */

// slice a string JavaScript counts positions from zero. First position is 0. Second position is 1.

let stringSlicedUp = stringOne.slice(0, 7); //  stringOne.slice(1, 7) gives us "his is"
console.log({ stringSlicedUp });

//// If you omit the second parameter, the method will slice out the rest of the string
let sliceWithNoSecondArgument = stringOne.slice(7);
console.log({ sliceWithNoSecondArgument });

//// single negative value in slice starts counting from -1 from last character of string and included the character specified;

let negativeSlicingSingleArgument = stringOne.slice(-6); //If a parameter is negative, start at -6 till the end of the string
console.log({ negativeSlicingSingleArgument });

// This example slices out a portion of a string from position -10 to position -6:
let negativeSlicingTwoArguments = stringOne.slice(-10, -6);
console.log({ negativeSlicingTwoArguments });

/* SUBSTRING */
// substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let subStringOne = stringOne.substring(-12, 6); // -12 treated as 0
console.log({ subStringOne });

// subStr()
let newSubStrExample = stringOne.substr(6, 3);
console.log({ newSubStrExample });
/* REPLACE */
// Note
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
let text = 'Visit Microsoft today only Microsoft';
let newText = text.replace('Microsoft', 'W3Schools');
console.log({ newText });

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let newTextCaseSensitivityCheck = text.replace('MICROSOFT', 'Google');
console.log({ newTextCaseSensitivityCheck });

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let newTextCaseSensitivity = text.replace(/MICROSOFT/i, 'W3schools');

console.log({ newTextCaseSensitivity });

// To replace all instances
// using /g flag
let someString =
  'This is some string of text. While some text appears different';
let allString = someString.replace(/some/g, 'ALL');
console.log(allString);

// using replaceAll()
let replaceAllInstances = 'I love cats and cats love me'.replaceAll(
  'cats',
  'CATS'
);
console.log({ replaceAllInstances });

//

let textTest =
  'I love cats. Cats are very easy to love. Cats are very popular.';
textTest = textTest.replaceAll('Cats', 'Dogs');
textTest = textTest.replaceAll('cats', 'dogs');
console.log(textTest);

/* convert to upper and lower cases */
console.log('convert me to uppercase'.toUpperCase());
console.log('LOWER CASE PLEASE'.toLowerCase());

/* concatenate strings */
let text1 = 'Ï Love ';
let text2 = 'Javascripts';
let text3 = text1.concat(text2);
console.log(text3);
let text4 = text3.concat(' more and more');
console.log(text4);

/* trim */
// The trim() method removes whitespace from both sides of a string:

let trimText = '     Hello World ';
console.log(trimText.trim());

let trimStart = '      Google'.trimStart();
console.log({ trimStart });

let trimEnd = 'Hello Google      '.trimEnd();
console.log({ trimEnd });

/* Padding text */
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

let textToPad = '5';
console.log(textToPad.padStart(5, 'X'));
console.log(textToPad.padEnd(3, 'C'));

// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.

let numberToPad = 4;

// first convert number to string
let stringFromNumber = numberToPad.toString();
stringFromNumber = stringFromNumber.padEnd(6, '0');
console.log(stringFromNumber);
let paddedNumber = Number(stringFromNumber);
console.log(paddedNumber);
