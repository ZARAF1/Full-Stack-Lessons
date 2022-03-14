// logical && (both conditions should evaluate to true for the code to execute)
let stoplight='green';
let passengers=0;
if(stoplight==='green'&& passengers===0){
    console.log('go')
}
else{
    console.log('stay')
}
stoplight==='green' && passengers===0?console.log('shit'):console.log('shat')
// logical OR
if(stoplight==='red'|| passengers===0){
    console.log('go')
}
else{
    console.log('stay')
}

//logical not
let excited = false;
console.log(!excited)


// IMPORTANT Logical AND can be used like this by nesting one if into another
function testLogicalAnd(val) {
    // Only change code below this line

    if (val) {
        if (val) {
            return "Yes";
        }
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);


// IMPORTANT Logical OR can be used like this by placing if one after the other
function testLogicalOr(val) {
    // Only change code below this line

    if (val>20) {
        return "Outside";
    }

    if (val<10) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);