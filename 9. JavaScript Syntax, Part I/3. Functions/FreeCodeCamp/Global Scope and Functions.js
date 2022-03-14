/*In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block
have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the var keyword are automatically created in the global scope. This can create
unintended consequences elsewhere in your code or when running a function again. You should always declare your
variables with var.*/

// global variable
let val1=10;

function fun1() {
    // local variable
    val2=5;

}

// Only change code above this line

function fun2() {
    console.log(val1);
    console.log(val2);

}


fun1() // after running the fun1 val2 will have global scope thats why it can be called directly
fun2()
console.log(val2)
