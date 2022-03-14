Inner functions and arrow functions
One common mistake when using inner functions is misunderstanding the context where the inner
function is being run. Let us take an example of a method with an inner function:

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {

        function createIntroduction() {
            return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
        }

        return createIntroduction();
    }
}

person.introduction();
// "Hello, my name is undefined undefined and my phone number is undefined!"
Intuitively it would seem logical that the inner function would be run in the same context as the method.
However, this claim is false. Running functions without object namespace or provided scope is still just
a function invocation even if the function is defined inside a method or called inside method invocation.
As we do not provide the function with any context, we will not be getting any.
Basically this inside createIntroduction will either be undefined or point to the global object.

To actually call the inner function with person as its context, the context should be provided upon calling:

    const person = {
        firstName: "Stacy",
        lastName: "Student",
        tel: "0400123456789",

        introduction: function() {

            function createIntroduction() {
                return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
            }
            // Providing context upon calling
            return createIntroduction.call(this);
        }
    }

person.introduction();
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"
Other possibility is to bind this upon defining and assigning the function to a variable:

    const person = {
        firstName: "Stacy",
        lastName: "Student",
        tel: "0400123456789",

        introduction: function() {


            const createIntroduction = function() {
                return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
            }.bind(this); // *this* inside the createIntroduction is now bound to the *this* of the outer function

            return createIntroduction();
        }
    }

person.introduction();
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"
Functions declared using the function keyword need to be explicitly bound by using bind if that is something the developer desires, however arrow functions are automatically bound to the context of the outer function. What this means in practice is that the example below works equal to the example above:

    const person = {
        firstName: "Stacy",
        lastName: "Student",
        tel: "0400123456789",

        introduction: function() {


            const createIntroduction = () => {
                return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
            } // *this* inside createIntroduction is now bound to outer function's *this* because of arrow function

            return createIntroduction();
        }
    }
