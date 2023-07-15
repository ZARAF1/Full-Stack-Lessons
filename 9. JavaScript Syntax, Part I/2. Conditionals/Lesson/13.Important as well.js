// example 1

if (true) {
    console.log("it was always true")
}

// example 2
let newVariable = true;
if (newVariable) {
    console.log("variable was true")
}


// example 3
const testConditional = cond => {
    return cond ? "true" : "false";
}
console.log(testConditional(5 < 6))