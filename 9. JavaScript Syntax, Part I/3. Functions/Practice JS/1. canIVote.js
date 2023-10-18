/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
* */

const canIVote = age => {
  if (typeof age !== 'number') {
    return 'please enter a number!';
  } else if (typeof age === 'number' && age < 18) {
    return `You are too young to vote please wait ${18 - age} ${
      18 - age > 1 ? 'years' : 'year'
    }`;
  } else if (typeof age === 'number' && age >= 18) {
    return `Welcome to vote!`;
  } else {
    return `Must have committed a sin to reach here!`;
  }
};

console.log(canIVote(15));
