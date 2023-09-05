let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
];
// length of the array
console.log(`Length before : ` + secretMessage.length);

// pop(): method removes the last array item and returns the item which can be stored in the variable
let poppedElement = secretMessage.pop();
console.log(`Length after : ` + secretMessage.length);
// push(): add item or items to the end of the array it returns the new length of the array after adding the item or items
secretMessage.push('to', 'Program');
console.log(secretMessage);
//indexOf(): find the index of a specific value in the array
console.log(secretMessage.indexOf('easily'));
// update array element
secretMessage[7] = 'right';
console.log(secretMessage);
// shift(): remove the first item from an array
secretMessage.shift();
console.log({ secretMessage });
// unshift(): add item / items to the beginning of the array returns the new length of the array;
let newLength = secretMessage.unshift('Programming');
console.log(newLength);
console.log(secretMessage);
// splice() : The splice() method adds new items to an array.
secretMessage.splice(6, 5, 'know'); // (position where new element should be added, how many elements should be removed, which element/elements should be added )

// join an array using
console.log(secretMessage.join(','));

// Flatten array by depth by default 1 which doesnt need to be specified
let twoDimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, [8, 9]],
];
// let flattenedArray = twoDimensionalArray.flat(); // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
let flattenedArray = twoDimensionalArray.flat(2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(flattenedArray);

// concat two arrays into a third array doesnt update the original arrays or use the '...' spread operator
let arr1 = ['a', 1, 2, 3, 4, 'b'];
let arr2 = ['ali', 'tom'];
let arr3 = arr1.concat(arr2);
let arr4 = ['tunisia', 'azerbaijan'];
let arr5 = arr1.concat(arr2, arr4);
console.log(arr5);
console.log(arr3);

//  merge an array with values like the spread operator
let arr6 = arr1.concat('Holy gwakamoli');
console.log(arr6);

// slice(): The slice() method slices out a piece of an array.
let slicedArray = arr6.slice(0, 3); // value at index 3 in omitted and not displayed
console.log(slicedArray);

//  toString(): works similar to join() with only difference that in join() we can specify the seperator
let array1 = [1, 2, 3, 4, 5];
console.log(typeof array1.toString());
console.log(array1.toString());
