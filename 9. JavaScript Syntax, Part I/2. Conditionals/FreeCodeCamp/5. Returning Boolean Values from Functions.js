/*You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

    Sometimes people use an if/else statement to do a comparison, like this:*/

    function isEqual(a,b) {
        if (a === b) {
            return true;
        } else {
            return false;
        }
    }
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
//replacing if else
function isEqualOrNot(val1,val2) {
    return val1 === val2;
}

console.log(isEqualOrNot(5,5))

// another example
function isLess(a, b) {
    // Only change code below this line
    return a < b
    // Only change code above this line
}

console.log(isLess(10, 15));