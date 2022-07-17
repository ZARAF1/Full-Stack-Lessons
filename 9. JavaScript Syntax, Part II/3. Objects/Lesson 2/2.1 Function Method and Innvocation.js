/*Function and method invocations
To get back into JavaScript world, and still keeping the previous analogy in mind, let us start with the previously
introduced person object:

const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
    }

}
If we now call the introduction method of the person object, we should get an introduction from Stacy:

person.introduction();
// "Hello, my name is Stacy Student and my phone number is 0400123456789!"
But what happens when we take the function out of context?

const noContextIntroduction = person.introduction;
noContextIntroduction();
// "Hello, my name is undefined undefined and my phone number is undefined!"
Clearly this no longer references to Stacy, even though during the definition it seemed like it could be bound to it.
The reason is that the reference of this on method invocations is based on the object namespace used when calling the
method. In other words when calling person.introduction, this will reference to person. When calling the function from
noContextIntroduction it became a plain function invocation because there was no object namespace specified. In function
invocations this is either undefined or a global object [1].

Knowing all this, we can now “copy” the function from Stacy to some other object contexts:

const secondPerson = {
    firstName: "Teppo",
    lastName: "Teacher",
    tel: "050987654321"
}

secondPerson.introduction = person.introduction;
secondPerson.introduction();
// "Hello, my name is Teppo Teacher and my phone number is 050987654321!"
As we can see, there is no mention of Stacy anymore when calling the method via Teppo’s object.

Indirect invocation and binding
*/
const person = {
    firstName: "Stacy",
    lastName: "Student",
    tel: "0400123456789",

    introduction: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`
    }

}
const secondPerson = {
    firstName: "Teppo",
    lastName: "Teacher",
    tel: "050987654321"
}

secondPerson.introduction = person.introduction;
console.log(secondPerson.introduction());
console.log(secondPerson)