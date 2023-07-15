/*
/!*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing
the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
* *!/
/!*

const canIVote = age => {
    return age >= 18;
}
console.log(canIVote(17))
*!/

/!*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
* *!/

/!*
const lifePhase = (age) => {
    if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else {
        return 'adult'
    }

}
console.log(lifePhase(18))*!/


/!*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
* *!/

const finalGrade = (grade1, grade2, grade3) => {

    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return `Invalid grade entered`
    } else {
        let averageGrade = (grade1 + grade2 + grade3) / 3;
        if (averageGrade < 60) {
            return `F`
        } else if (averageGrade < 70) {
            return 'D'
        } else if (averageGrade < 80) {
            return 'C'
        } else if (averageGrade < 90) {
            return 'B'
        } else {
            return 'A';
        }
    }
}

console.log(finalGrade(0, 9, 5));

*/
/*
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled.
It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
* */

/*let dice1 = Math.floor(Math.random() * 6 + 1)
let dice2 = Math.floor(Math.random() * 6 + 1)


let rollTheDice = (dice1, dice2) => {
    return dice1 + dice2
}

let resultOfDiceRoll = rollTheDice(dice1, dice2);
console.log(resultOfDiceRoll)
*/


/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object.
Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:

'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
 */
/*

const calculateWeight = (earthWeight, planetName) => {
    let weight;
    if (planetName === 'Mercury') {
        weight = earthWeight * 0.378
    } else if (planetName === 'Venus') {
        weight = earthWeight * 0.907
    } else if (planetName === 'Mars') {
        weight = earthWeight * 0.377
    } else if (planetName === 'Jupiter') {
        weight = earthWeight * 2.36
    } else if (planetName === 'Saturn') {
        weight = earthWeight * 0.916;
    } else {
        return `invalid planet name entered`
    }
    return weight;
}
let weight = calculateWeight(80, "Venus");
console.log(weight)*/


/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is
currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'

*/

const howOld = (age, year) => {
    let currentYear = new Date().getFullYear();
    let yearDifference;
    let calculatedAge;
    let birthYear = currentYear - age;
    if (year > currentYear) {
        yearDifference = year - currentYear;
        calculatedAge = age + yearDifference;
        return `You will be ${calculatedAge} in the year ${year}`
    } else if (year < birthYear) {
        yearDifference = birthYear - year;
        return `'The year ${year} was ${yearDifference} years before you were born'
`
    }
}

let howOldWillIBe = howOld(40, 1980)
console.log(howOldWillIBe)