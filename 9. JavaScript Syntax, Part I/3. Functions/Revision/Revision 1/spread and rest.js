/*Spread*/

let array = [1, 2, 3, 4, 5];
console.log(...array)

// This comes in handy when a function expects a list of arguments and all you have is an array.
console.log(Math.max(1, 2, 3))
console.log(Math.max(...array))

// Cloning arrays
//  Below example shows that if we update a cloned array that was formed by assigning an old array to a new one
// then changing the new array will mutate the original array as well
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[1] = 9
console.log(arr1)

// to clone use
let originalArray = [4, 6, 8, 7];
let copiedArray = [...originalArray]
let anotherCopiedArray = [123, ...originalArray, 159]
console.log(copiedArray)
console.log(anotherCopiedArray)


// spread works on strings as well
let testString = "TEST";
let arrTestString = [...testString]
console.log(arrTestString)


// spread on objects

const person = {
    name: "Ali",
    age: 40
}

let personTwo = {...person}

console.log(personTwo)

personTwo.favoriteFood = ["Spaghetti", "Clams", "Juice", "SeaFood"]
console.log(personTwo)
console.log(person)

// merge two object properties into one

const personThree = {...person, ...personTwo, height: 170};
console.log(personThree);

