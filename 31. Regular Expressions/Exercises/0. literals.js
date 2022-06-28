const expressionToTest = "I love gorillas"

const expressionToTestAgainst = /I love gorillass/

let theTest = expressionToTestAgainst.test(expressionToTest)

console.log(theTest)