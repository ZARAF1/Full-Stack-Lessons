function tstCond (condition){
    if (condition){
        return true;
    }
    else {
        return false;
    }

}

console.log(tstCond(5<6))

// second example
function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}
test(true);
test(false);