function createGreeting(name: string) {
    return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Aisle Nevertell');
/**
Here’s how TypeScript can infer myGreeting above to be of type string:

createGreeting()’s return statement is followed by a string variable, so createGreeting() is inferred to return string.
createGreeting('Aisle Nevertell') therefore must result in a value of type string.
myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type string.
*/

function ouncesToCups(ounces: number) {
    return `${ounces / 16} cups`;
}

const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.





function getRandomNumber(){
    return Math.random();
}
let myVar = getRandomNumber();

