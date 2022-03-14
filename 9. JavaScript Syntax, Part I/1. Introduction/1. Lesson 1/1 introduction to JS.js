// single line comment
/*Multi line comment*/
/*
Different Datatypes
strings
boolean
numbers
undefined
Null
NaN
symbol
object
*/


// string properties
let stringLength= "hello";
console.log(stringLength.length)


// string methods
console.log('hello'.toUpperCase())
console.log('hello'.startsWith('h'))

//builtin objects
console.log(Math.floor(Math.random()*50))
let storeVar=Math.floor(Math.random()*5)
console.log(storeVar)
// method to remove white spaces from the beginning and end of text
console.log("     This will remove whitespaces from the fucking text".trim())

// character code at
console.log('Hello World'.charCodeAt(1))


const newArry = [1,23,2,4,5]
console.log(newArry.length)

newArry.forEach(element=>{
    console.log(element)
})