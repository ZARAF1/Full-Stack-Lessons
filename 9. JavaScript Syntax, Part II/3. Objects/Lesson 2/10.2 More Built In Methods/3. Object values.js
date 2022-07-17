let student = {
        name: 'Egill Vignission',
        gpa: 3.4
    }
    console.log(Object.values(student))


const GPA_BENCHMARK = 3.5;
let students = {
    1: {
        name: 'Egill Vignission',
        gpa: 3.4
    },
    2: {
        name: 'Bianca Pargas',
        gpa: 3.8
    },
    3: {
        name: 'Aisling O\'Sullivan',
        gpa: 3.4
    },
    4: {
        name: 'Sameer Fares',
        gpa: 3.9
    }
}
let honorRoll = Object.values(students)
console.log(honorRoll)
// nested object acts as a key for example numbers 1,2,3,4 and the value is the object itself for example  { name: 'Egill Vignission', gpa: 3.4 }