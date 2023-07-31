So far we have been going through simple cases: functions have had input parameters and they have returned an output value depending on those inputs. Things are not always that simple though: functions can also access values that are not directly given to them as parameters. To understand which values can be accessed from where, a concept of scopes must be introduced. To be accurate, scopes are not only related to functions but it is the most natural place to cover the topic.

    We can start by thinking a following program:

    let globalVariable = "Hello world";
As the name of the variable suggests, this is something called a global variable. The reason for this is that the variable has been declared at the “outermost” level, in the so called global scope. Let us create a new function as well:

    let globalVariable = "Hello world";

function sayHello() {
    console.log(globalVariable);
}

sayHello();
The above code will print “Hello world” to the console even though we did not pass the globalVariable to the function. This is due to to the function having access to all variables and functions defined inside the scope in which itself was defined. In contrary, if we declare a variable in local function scope, we cannot access it from the outer scope:

    function saveVariable() {
        let fLocalVar = "Hello world";
    }
saveVariable();
console.log(fLocalVar); // ReferenceError
The scoping works (somewhat) in block level as well. After introduction of the keyword let, JavaScript has had a support for a block scope as well. In practice the block scope is similar to function scope (it can be said that function scope is only a special case of block scope). Let us take an example:

    function blockExample() {
        let fLocalVar = "Hello from function scope";
        // Create a block. This could be an if block or a loop block as well
        {
            let bLocalVar = "Hello from the block";
            console.log(bLocalVar); // Prints "Hello from the block"
            console.log(fLocalVar) // Prints "Hello from function scope"
        }

        console.log(bLocalVar); // ReferenceError
    }

blockExample();
As you might guess, accessing a block-local variable outside the block will not work. But this was/is not always the case:
    before let there was only var:

function blockExample() {
    let fLocalVar = "Hello from function scope";
    // Create a block. This could be an if block or a loop block as well
    {
        var bLocalVar = "Hello from the block";
        console.log(bLocalVar); // Prints "Hello from the block"
        console.log(fLocalVar) // Prints "Hello from function scope"
    }

    console.log(bLocalVar); // Prints "Hello from the block"
}

blockExample();
The variables defined with var were local to the function scope, but not local to the block scope. This is the main difference between let and var. Declaring a variable with var inside a function would still not give access to the outer scopes though:

    function saveVariable() {
        var fLocalVar = "Hello world";
    }

console.log(fLocalVar); // ReferenceError


Closures and Nested functions
So far we have only seen examples where the function has access to the global scope from within. But as previously stated, functions have access to all their parent scopes, not just the global scope or their first parent. What this means in practice is that if we create functions within functions (i.e. nested functions), the innermost functions have access to all the outer scopes as well. If there are conflicts with overlapping variable names, the “more nested” scopes take precedence. In other words, the innermost scope takes the highest precedence, while the outer-most scope takes the lowest.

    Allowing nested functions with access to outer scopes has its implications and will obviously rise some questions. For one, when a nested function is returned from an outer function and executed, what should happen to the variables in the outer function? The description of the problem might be hard to concretize, but let us study the following example:

    function outerFunction() {
        let outerVariable = "Hello from outer";

        return function() {
            return "Hello from inner" + outerVariable;
        }

    }

// The outerFunction returns a function that will be assigned to innerFunction
let innerFunction = outerFunction();

// Inner function references to "outerVariable"
// but does outerVariable still exist at the time
// innerFunction is called?
innerFunction();
As we see, the problem is whether the outerVariable would still exist when innerFunction is called. After all, the execution of outerFunction has ended by that point. The simple answer to this is that yes, outerVariable will still exist. And this is due to something called closures.

    Closures are by definition, expressions (e.g. functions) that can have free variables together with an environment that binds those variables [1]. In the case of the example, innerFunction forms a closure along with the outer function, in which case the variables in the referenced outer scope must be preserved. The memory can only be freed when the innerFunction is no longer accessible.