/*Logical Order in If Else StatementsPassed
Order is important in if, else if statements.

    The function is executed from top to bottom so you will want to be careful of what statement comes first.

    Take these two functions as an example.

    Here's the first:*/

function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}

// And the second just switches the order of the statements:

function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

// While these two functions look nearly identical if we pass a number to both we get different outputs.

console.log(foo(0))
console.log(bar(0))

// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.


function foob(x) {
    let answer = "";
    switch (x) {
        case x < 1:
            answer = "x is smaller than 1";
            break;
        case x > 1:
            answer = "x is greater than 1";
            break;
        default:
            answer = "none matched"
    }
    return answer;

}

console.log(foob(2))