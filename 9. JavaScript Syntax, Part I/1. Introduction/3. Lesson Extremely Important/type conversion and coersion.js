/*****
Type Coersion: 

- Type coersion happens when javascripts automatically/implicitly converts the value from one type to another based on the operator. This includes conversion from number to strings, strings to numbers and booleans to numbers. 


1. Number to String Conversion: When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly. When the string ‘Rahul’ is added to the number 10 then JavaScript does not give an error. It converts the number 10 to string ’10’ using coercion and then concatenates both the strings. Some more examples are shown below.
*/
/** Example 1 */
// The Number 10 is converted to string '10' and then '+' concatenates both strings
let x = 10 + '20';
let y = '20' + 10;
let z = 'hello' + 10;

// The Boolean value true is converted to string 'true' and then '+' concatenates both the strings
let xyz = true + '10';

console.log(x);
console.log(y);
console.log(z);
console.log(xyz);

/**
2. String to Number Conversion: When an operation like subtraction (-), multiplication (*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.
 */

// Example 2
// The string '5' is converted to number 5 in all cases implicitly

let b = 10 - '5';
let c = 10 * '5';
let d = 10 / '5';
let e = 10 % '5';
let f = 10 - 'Ali';

console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f); // NaN

// Javascript converts numbers to strings if a + operator is used between a string and a number
let testVal = 5 + '5' + 1; // becomes 551
console.log({ testVal }, typeof testVal);
// Javascript converts strings to numbers if a - sign is used between a string and a number
let testVal2 = '5' - 5 + 1; // becomes 54
console.log({ testVal2 }, typeof testVal2);

/*
3. Boolean to Number: When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. Some examples of this are shown below.
*/
// Example 3:
// The Boolean value true is converted to number 1 and then operation is performed
var truePlusTwo = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
var falsePlusTwo = false + 2;

console.log(truePlusTwo);
console.log(falsePlusTwo);

/**
4. The Equality Operator: The equality operator (==) can be used to compare values irrespective of their type. This is done by coercing a non-number data type to a number. Some examples of this are shown below:

Example 4
 */

// Should output 'true' as string '10'
// is coerced to number 10
var g = 10 == '10';

// Should output 'true', as boolean true
// is coerced to number 1
var h = true == 1;

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
var i = true == 'true';

console.log(g);
console.log(h);
console.log(i);

// additionally remember that === (strictly equal) doesnt do type coersion while == (loosely equal note: dont use it as it gets bugs in code) does type coersion. With loosely equal == the "18" string is converted to number then matched to 18
console.log('18' === 18); // prints false
console.log('18' == 18); // prints true

/*****
 Type Conversion: To explicitly convert types when performing operations on values;

 - In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.
 */

let testVal3 = '5';
console.log(Number(testVal3) + 5); // 10;

let testVal4 = 5;
console.log(String(testVal4) + 5);

let testVal5 = 'jonas';
console.log(Number(testVal5)); // NaN because jonas cant be converted to a number;

/*****
 To understand the concept of Truth and Falsy values lets try to convert five falsy values to boolean to see why the act
 like that in if else statement


 */

console.log(
  Boolean(''),
  Boolean(NaN),
  Boolean(undefined),
  Boolean(0),
  Boolean(null)
);
console.log(
  Boolean(-1),
  Boolean('Hello String'),
  Boolean(5214),
  Boolean({}),
  Boolean([])
);

let money = 0;
if (money) {
  // js will try to convert the any value i.e., value of the variable to boolean so that it can execute the blocks
  console.log('Spend Wisely');
} else {
  console.log('Find a Job');
}
