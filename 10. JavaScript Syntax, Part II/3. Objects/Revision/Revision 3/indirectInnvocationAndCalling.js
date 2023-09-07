const person = {
  firstName: 'Stacy',
  lastName: 'Student',
  tel: '0400123456789',

  introduction: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName} and my phone number is ${this.tel}!`;
  },
};

const secondPerson = {
  firstName: 'Teppo',
  lastName: 'Teacher',
  tel: '050987654321',
};
// secondPerson.introduction = person.introduction;
// console.log(secondPerson.introduction());
let introduction = person.introduction;
console.log(person.introduction.call(secondPerson));

console.log(introduction.apply(secondPerson));

const { firstName, secondName, tel } = secondPerson;
console.log(firstName, secondName, tel);
