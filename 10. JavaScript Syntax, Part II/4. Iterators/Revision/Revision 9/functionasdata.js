let greetMe = () => {
    return `Hello and welcome to my channel!`;
}
// storing the value of a function
let greet = greetMe();
console.log(greet)

// storing the function in a function or function as data

let welcome = greetMe;
console.log(welcome())