/*
convertToBaby()
Instructions
1.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with
each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

convertToBaby(animals);
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry
you’ll have plenty of opportunities to use built-in methods later on!*/
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
  let babyAnimals = [];
  for (let i = 0; i < arr.length; i++) {
    babyAnimals.push(`Baby ${arr[i]}`);
  }
  return babyAnimals;
};
console.log(convertToBaby(animals));
