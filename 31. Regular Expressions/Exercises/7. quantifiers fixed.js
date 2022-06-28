const expressionToTest = "I love gorillas"

const regularExp = /^\w{1}\s\w{1,4}\s\w{1,8}$/

let theTest = regularExp.test(expressionToTest)

console.log(theTest)
console.log(process.env)