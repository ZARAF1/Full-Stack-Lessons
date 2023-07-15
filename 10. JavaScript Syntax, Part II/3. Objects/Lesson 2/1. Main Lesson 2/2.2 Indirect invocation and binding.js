/*
In addition to calling functions by functionName() it is possible to call them indirectly by
either functionName.call() or functionName.apply(). What is special with these types of invocations
is that they allow the caller to specify the context manually without a need for the function to be a method
(part of an object). The context can be specified by giving the context as a parameter to the call or apply functions.

Calling a function with one-off context specified:
    const introduction = person.introduction;
introduction();
// No context: "Hello, my name is undefined undefined and my phone number is undefined!"
// Now, with indirect invocation
introduction.call(person);
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"
// or
introduction.apply(person);
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"

In addition to functions where the context is given once calling it, it is possible to bind the context
permanently by using the bind function:

// Bind *this* to the person object ("Stacy")
    let boundIntroduction = person.introduction.bind(person);
boundIntroduction();
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"
As seen, even though we called the function directly without any context, we still got Stacy’s information, because
we bound Stacy to be this in the function assigned to boundIntroduction variable.*/

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
    }

}
const secondPerson = {
    firstName: "Teppo",
    lastName: "Teacher",
    tel: "050987654321"
}

let introduction = person.introduction;
// console.log(typeof introduction) // --> function
console.log(introduction()); // Hello, my name is undefined undefined and my phone number is undefined!


console.log(introduction.call(secondPerson)); // Hello, my name is Teppo Teacher and my phone number is 050987654321!
console.log(secondPerson); // you will see that the method does not exist on secondPerson
console.log(person.introduction.apply(secondPerson)); // Hello, my name is Teppo Teacher and my phone number is 050987654321!
console.log(secondPerson) // you will see that the method does not exist on secondPerson

// also works with an outside function which is not a part of an object like above examples
function checkAppCall() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}`)
}

checkAppCall.apply(secondPerson)
let boundIntroduction = person.introduction.bind(person);
console.log(boundIntroduction())
