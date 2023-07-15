// different comparison operators

// less than <

if (4 < 5) {
    console.log('yes 4 is less than 5')
}

// less than equal to

if (4 <= 5) {
    console.log(4 <= 5)
}

//  greater than
if (5 > 4) {
    console.log('yes 5 is greater than 4')
}


// greater than equal to

if (4 >= 4) {
    console.log('Yes 4 is greater than or equal to 4')
}


//is equal to

if ('hello' === 'Hello') {
    console.log('its equal')
} else {
    console.log('its not equal')
}


// additionally remember that === (strictly equal) doesnt do type coersion while == (loosely equal note: dont use it as it gets bugs in code)
// does type coersion. With loosely equal == the "18" string is converted to number then matched to 18
console.log("18" === 18) // prints false
console.log("18" == 18) // prints true

// is not equal

if (4 !== 5) {
    console.log('true that')
} else {
    console.log('false')
}

if (4 === 4) {
    console.log("true 4 equals 4")
} else {
    console.log('4 does not equal 4')
}

//  we can also store the result of a comparison or log it straight to the console

let resultOfComparison = 5 < 6;
console.log(resultOfComparison)

console.log(5 > 6)

