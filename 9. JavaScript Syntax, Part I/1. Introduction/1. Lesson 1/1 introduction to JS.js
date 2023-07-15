/****** Commenting **/
// single line comment
/*
Multi line comment*/
/*

/****** Different data types **/
// strings
// boolean
// numbers
// undefined
// Null
// NaN
// symbol
// object
// */


/* string properties and methods*/
const str = "hello i am a string";
// determine length of a string
const stringsLength = str.length
console.log("Length of the string is " + stringsLength)
console.log("Length of another string is " + "this is another string".length)

// uppercase

console.log(str.toUpperCase())
console.log(str.startsWith('h'))
console.log(str.length)

//another way directly on the string

console.log('hello'.toUpperCase())
console.log('hello'.startsWith('h'))


//builtin objects
console.log(Math.floor(Math.random() * 50))
let storeVar = Math.floor(Math.random() * 5)
console.log(storeVar)
// method to remove white spaces from the beginning and end of text
console.log("        This will remove whitespaces from the frucking text      ".trim())

// character code at
console.log('Hello World'.charCodeAt(1))


const newArry = [1, 23, 2, 4, 5]
console.log(newArry.length)

newArry.forEach(element => {
    console.log(element)
})