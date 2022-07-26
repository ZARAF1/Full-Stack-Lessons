/*
//example 1

let aPerson: {name: string, age: number};
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property.
aPerson = {name: 'User McCodecad', age: 22}; // Valid code.
aPerson={name:"Ali",age:15,height:54}
// Type '{ name: string; age: number; height: number; }' is not assignable to type '{ name: string; age: number; }'.
//   Object literal may only specify known properties, and 'height' does not exist in type '{ name: string; age: number; }'

//example 2

let aCompany: {
    companyName: string,
    boss: {name: string, age: number},
    employees: {name: string, age: number}[],
    employeeOfTheMonth: {name: string, age: number},
    moneyEarned: number
};
*/


// example 3

let person:{name:string,age:number,education:{degree:string,institution:string},favoriteFoods:string[],hobbies?:[string][]}= {
    name: "Ali",
    age: 34,
    education: {
        degree: "GITM",
        institution: "TSE"
    },
    favoriteFoods: ["Biryani", "Firni"],
    hobbies:[["badminton"]]
}
console.log(`${person.name} loves ${person.favoriteFoods[1]}`)
person.favoriteFoods[2]="Jalebi";
console.log(person.favoriteFoods[2])
person.hobbies.push(["tennis"])
console.log(person.hobbies)