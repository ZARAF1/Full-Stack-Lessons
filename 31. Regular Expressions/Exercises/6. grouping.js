const expressionToTest = "I love gorillas"

const regularExp = /^I love (baboons|gorillas)/

let theTest = regularExp.test(expressionToTest)

console.log(theTest)