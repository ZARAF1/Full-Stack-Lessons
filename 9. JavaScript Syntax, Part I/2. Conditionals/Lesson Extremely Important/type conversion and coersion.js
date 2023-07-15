/*****
 Type Coersion: Javascript implicitly converts types when performing operations on values;
 */

/*Example 1*/

// Javascript converts numbers to strings if a + sign is used between a string and a number
let testVal = "5" + 5 + 1; // becomes 551
console.log({testVal}, typeof testVal)

// Javascript converts strings to numbers if a - sign is used between a string and a number
let testVal2 = "5" + 5 - 1
console.log({testVal2}, typeof testVal2)

// additionally remember that === (strictly equal) doesnt do type coersion while == (loosely equal note: dont use it as it gets bugs in code)
// does type coersion. With loosely equal == the "18" string is converted to number then matched to 18
console.log("18" === 18) // prints false
console.log("18" == 18) // prints true


/*****
 Type Conversion: To explicitly convert types when performing operations on values;
 */

let testVal3 = "5";
console.log(Number(testVal3) + 5) // 10;

let testVal4 = 5;
console.log(String(testVal4) + 5)

let testVal5 = "jonas";
console.log(Number(testVal5)) // NaN because jonas cant be converted to a number;

/*****
 To understand the concept of Truth and Falsy values lets try to convert 5 falsy values to boolean to see why the act
 like that in if else statement


 */

console.log(Boolean(""), Boolean(NaN), Boolean(undefined), Boolean(0), Boolean(null))
console.log(Boolean(-1), Boolean("Hello String"), Boolean(5214), Boolean({}))

let money = 0;
if (money) { // js will try to convert the any value i.e., value of the variable to boolean so that it can execute the blocks
    console.log("Spend Wisely")
} else {
    console.log("Find a Job")
}