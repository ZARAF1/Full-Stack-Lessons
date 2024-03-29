/*
If you have a multi-dimensional array, you can use the same dom functions as the prior waypoint to loop
through both the array and any sub-arrays. Here is an example:
*/

var arr = [
    [1, 2], [3, 4], [5, 6]
];
for (var i = 0; i < arr.length; i++) {
    // arr[i] will log the three elements of arr i.e.,[1,2], [3,4], [5,6]
    for (let j = 0; j < arr[i].length; j++)
        // inner for loop will run for each outer for loop
    {
        console.log(arr[i][j])
    }
}
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length
// of arr[i], since arr[i] is itself an array.


/**Another Example**/
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);