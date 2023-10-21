const person = {
  name: 'Ali',
  age: 40,
  introduction() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

const personTwo = {
  name: 'Bhalli',
  age: 40,
};
// function indirect invocation
personTwo.introduction = person.introduction;
person.introduction.apply(personTwo);
person.introduction.call(personTwo);

// binding a variable to
let introduced = person.introduction.bind(person);
introduced();

// getter methods
let personThree = {
  _firstName: 'Talli',
  _lastName: 'Prasad',
  _age: 40,
  get fullName() {
    if (this._firstName && this._lastName) {
      return `My full name is ${this._firstName} ${this._lastName}`;
    }
  },
  set newAge(val) {
    if (typeof val === 'number') {
      this._age = val;
    } else {
      console.log('Please add a number!');
    }
  },
};

console.log(personThree.fullName);
personThree.newAge = '55';
console.log(personThree._age);

// factory functions
const createRoboCop = (name, type) => {
  return {
    name: name,
    type: type,
    introduction: function () {
      console.log(`i am ${this.name} and of the type ${this.type}`);
    },
  };
};

const robo1 = createRoboCop('robo1', 'M1010');
console.log(robo1);
robo1.introduction();
