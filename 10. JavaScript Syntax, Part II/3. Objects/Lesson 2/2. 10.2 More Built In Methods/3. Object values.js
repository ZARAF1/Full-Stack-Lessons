//  takes the prop values and stores it in an array if nested object exists then it takes the nested object and stores it in the array

let student = {
  name: 'Egill Vignission',
  gpa: 3.4,
  intro() {
    return `${this.name} has a gpa of ${this.gpa}`;
  },
};
console.log(Object.values(student));

const GPA_BENCHMARK = 3.5;
let students = {
  studentCount: 4,
  school: 'Beacon House',
  1: {
    name: 'Egill Vignission',
    gpa: 3.4,
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8,
  },
  3: {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9,
  },
};
let honorRoll = Object.values(students);
console.log(honorRoll);
