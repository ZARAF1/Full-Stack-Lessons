/*
Ternary operators can be used for quick decision making. These are actually expressions as they evaluate to something
Unlike if/else statements which dont evaluate to something
* */

// Simple ternary example
(4 < 5) ? console.log('true') : console.log('false')

// another example
let night = true;
night ? console.log('turn lights on') : console.log('turn lights off')

// another example
let username = '';
username ? console.log(username) : console.log('stranger')

// another important example
let age = 17
let love = age <= 18 ? "Kiss 😘 " : "Hug 👩🏽‍🤝‍👩🏻"
console.log(love)

// another important example of usage of ternary in template literals

console.log(`I will love by ${age >= 18 ? "Kiss 😘 " : "Hug 👩🏽‍🤝‍👩🏻"}`)

// Usage in functions example
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";  // return is placed before the evaluation of ternary
}

checkEqual(1, 2);

