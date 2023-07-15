/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array.
This new array should contain all the strings from the argument array but with capitalized letters and an
exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const shoutGreetings = (arr) => {
    let capitalizedGreeting = arr.map(element => {
        return (`${element.toUpperCase()} !`)
    })
    console.log(capitalizedGreeting)
}

shoutGreetings(greetings)