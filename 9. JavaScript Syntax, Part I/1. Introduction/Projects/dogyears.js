/*
Assignment: Convert human age into the age of a dog.
Formula:
The first two years of a person’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/
let personsAge = process.argv[2];
const calculateDogYears = (ageOfPerson)=>{
    let dogYears;
    if (ageOfPerson<=2){
        dogYears=ageOfPerson*10.5;
    }
    else if (ageOfPerson>2){
        let earlyAge=2*10.5;
        let laterAge=(ageOfPerson-2) * 4;
        dogYears = earlyAge + laterAge;
    }
    return dogYears;
}
const ageInDogYears = calculateDogYears(personsAge)

console.log(calculateDogYears(personsAge))
/*

myName="Ali".toLowerCase();
//my name made lower cased
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)*/
