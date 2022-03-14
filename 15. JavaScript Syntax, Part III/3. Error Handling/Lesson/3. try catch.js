// just an example

/*

try {
    throw Error('This error will get caught');
} catch (e) {
    console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');

*/
// Prints: 'The thrown error that was caught in the try...catch statement!'


// proper example
const someVar = 'Cannot be reassigned';
try {
    someVar = 'Still going to try';
} catch(e) {
    console.log(e);
}