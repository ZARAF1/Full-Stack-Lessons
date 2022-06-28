const expressionToTest = "I love lagoons"

const expressionToTestAgainst = /I love [bl]a[bg]oons/

let theTest = expressionToTestAgainst.test(expressionToTest)

console.log(theTest)