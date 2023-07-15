/*
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled.
It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
* */

const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6) + 1
    // above line makes sure 0 doesnt appear as 1 is added also we multiply
    // Math.random by 6 so we will get up till 5 so when 1 is added it will not exceed 6
    let die2 = Math.floor(Math.random() * 6) + 1
    console.log(die1) // we dont return the die1 and die2 value here because return will not let next steps to proceed so we log
    console.log(die2)// alternately we could merge them into one string
    return die1 + die2
}
console.log(rollTheDice())

console.log(Math.floor(Math.random() * 6))