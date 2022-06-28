const expressionToTest = "I love gorillas"

const expressionToTestAgainst = /I love baboons|gorillas/

let theTest = expressionToTestAgainst.test(expressionToTest)

console.log(theTest)