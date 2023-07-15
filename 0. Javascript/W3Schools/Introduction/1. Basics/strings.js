const string1 = "This is a string";
console.log(string1)
console.log("Length of string is: " + string1.length)

/**** slicing a string ****/
/*
Note
JavaScript counts positions from zero.
First position is 0.
Second position is 1.
* */
const slicedString = string1.slice(0, 7)
console.log("Sliced string: " + slicedString)

/*
Omit second parameter will slice out the rest of the string
* */

const slicedStringTillLast = string1.slice(7)
console.log("From 7 character till the end: " + slicedStringTillLast)


/*
If a parameter is negative, the position is counted from the end of the string:
*/

const negPositionSliced = string1.slice(-7)
console.log("Negatively sliced i.e., -7 gives last seven characters : " + negPositionSliced)

/*
Negatively sliced portion:
*/
const negativelySlicedFromOnePositionToAnother = string1.slice(-16, -5);
console.log("Slices out starting at -5 uptil -16 in reverse: " + negativelySlicedFromOnePositionToAnother)


/**** substr ****/

/*
JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

* */

// Example
const subStrExample = string1.substr(5, 6)
console.log("In substr second parameter specifies the length of the extracted part hence output is: " + subStrExample)


/****Replacing content in a string****/
let text = "I love Windows";
let newText = text.replace("Windows", "Macintosh")
// doesnt change the original string on which replace is performed
// The replace() method returns a new string
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
console.log(newText)

