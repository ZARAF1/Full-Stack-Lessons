/*
Function expressions
Instead of creating functions by function statements like above, it is also possible to create functions by a function expression. In function expressions, the functions can be anonymous:

    const theNameOfVariable = function(parameter1, parameter2, ...) {
        // Statements here
        return theReturnValue;
    }
Even though the function is saved to a variable with a name, the function itself does not have a name; it is an anonymous function.
It is still possible to name the function itself though and it may be beneficial for debugging purposes:

    const theNameOfVariable = function theNameOfFunction(parameter1, parameter2, ...) {
        // Statements here
        return theReturnValue;
    }
Since function expressions can be saved into variables, they can be also given as arguments to
other functions. Previously we called console.log with different functions to print the function
object to the console. We may as well do that with an anonymous lambda function:

    console.log(function(parameter1, parameter2) {
    // Statements here
});
For example:

    console.log(function(a, b) {
        return a+b;
    });
// While the syntax may seem a little bit confusing because of all the parentheses, it is just an inline function
// expression that is given as a parameter to the console.log function. To make the inline lambda function more
// readable, JavaScript has got support for so-called arrow functions nowadays.*/

const multiply = function multiple(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3))