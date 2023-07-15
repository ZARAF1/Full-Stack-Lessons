// function 1
const helloWorld = () => console.log("Hello World")
helloWorld()

// function 2

const determineVote = age => {
    if (age === "number" && age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(determineVote(17))


// function 3
const agreeOrNot = (str1, str2) => {
    let answer = str1 === str2 ? true : false;
    return answer
}
console.log(agreeOrNot("ali", "ali"))


// function 4
/*

Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
    0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
    * *!/*/

const lifePhase = age => {
    if (age <= 3) {
        return "baby"
    } else if (age <= 12) {
        return "child"
    } else if (age <= 19) {
        return "teen"
    } else if (age <= 64) {
        return "adult"
    } else {
        return "senior citizen"
    }
}

console.log(lifePhase(2))

/*above function using a different approach*/

const checkAge = age => {
    switch (age) {
        case 0:
        case 1:
        case 2:
            return "bablu baby";
            break;

        case 3:
        case 4:
        case 5:
            return "toddler";
            break;

    }
}

console.log(checkAge(6))


// roll the dice

const rollDice = () => {
    const diceOne = Math.floor(Math.random() * 6 + 1) // plus one has been added so that the value of the expression is never a zero
    const diceTwo = Math.floor(Math.random() * 6 + 1)
    const determineDiceTotal = diceOne + diceTwo;
    console.log(`${diceOne} + ${diceTwo} = ${determineDiceTotal}`)
}
rollDice()

