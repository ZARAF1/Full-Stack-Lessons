const expressionToTest = "I love Sorillas."

const regularExp = /I love [A-Ga-g]orillas/

let theTest = regularExp.test(expressionToTest)

console.log(theTest)