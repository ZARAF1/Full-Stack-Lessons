const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
  languages: {
    national: ['urdu', 'punjabi'],
    international: ['english', 'french'],
  },
};
// Object keys
// returns the keys of the object in an array
const robotKeys = Object.keys(robot);
console.log({ robotKeys });

// Object entries
// return each key value pairs in array format nested within an array
const robotEntries = Object.entries(robot);
console.log({ robotEntries });

//OBJECT assign
// Declare newRobot below this line:
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
