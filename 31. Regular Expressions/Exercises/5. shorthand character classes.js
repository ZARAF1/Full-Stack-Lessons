const expressionToTest = "5 hats^"

const regularExp = /^\d\s\w\w\w\w\W$/

let theTest = regularExp.test(expressionToTest)

console.log(theTest)