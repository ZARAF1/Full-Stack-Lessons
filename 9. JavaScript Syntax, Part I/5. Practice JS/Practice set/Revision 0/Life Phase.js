// Write your function here:
const lifePhase = (age) => {
    if (age === 0 || age <= 3) {
        return 'baby'
    }
    ;

    if (age <= 12) {
        return 'child'
    }
    ;

    if (age <= 19) {
        return 'teen'
    }
    ;

    if (age <= 64) {
        return 'adult'
    }
    ;

    if (age <= 140) {
        return 'senior citizen'
    }
    ;

    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    }
    ;

}


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(12)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!


const lifePhasee = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
/*
// As a function declaration:
function lifePhase (age) {
    if (age < 0 || age > 140) {
       return 'This is not a valid age'
   } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
       return 'teen'
    } else if (age < 65) {
       return 'adult'
    } else {
        return 'senior citizen'
    }
}
*/
console.log(lifePhasee(5))