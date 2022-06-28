const expressionToTest = "I love babs."

const regularExp = /I .... (gorillas|babs)\./

let theTest = regularExp.test(expressionToTest)

console.log(theTest)