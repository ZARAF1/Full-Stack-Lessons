let person = {
    name: "Ali",
    age: 40,
    message() {
        console.log(`I am ${this.name}. I welcome you to my profile.`)
    }
}

let secondPerson = {
    name: "Bhali",
    age: 40

}

// let message = person.message;
// message();
//
// secondPerson.message = person.message;
// console.log(secondPerson)
// console.log(secondPerson.message())


// indirect invocation and binding

let introduction = person.message;
introduction.call(secondPerson) // person.message.call(secondPerson)
person.message.call(secondPerson)