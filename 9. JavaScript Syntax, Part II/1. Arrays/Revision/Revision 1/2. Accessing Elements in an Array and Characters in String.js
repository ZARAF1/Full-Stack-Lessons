/*
Accessing Elements
Each element in an array has a numbered position known as its index. We can access individual items using
their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.
Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an
array:
*/

// in below example we access individual array elements and also store them to a variable listItem
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem=famousSayings[0];
console.log(listItem)
console.log(famousSayings[2])
//accessing an item over last item will return undefined
console.log(famousSayings[3])

// accessing individual characters in strings
const greeting= 'Hello World!'
console.log(greeting[0])