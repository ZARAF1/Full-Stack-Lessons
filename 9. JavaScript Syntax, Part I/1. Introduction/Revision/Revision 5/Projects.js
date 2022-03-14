// Kelvin to Fahrenheit

const kelvin = 293;
const celsius = kelvin - 273;

let fahrenheit = celsius *(9/5) + 32;
fahrenheit=Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} Fahrenheit` )


//
let age = 1;

function calculateDogYears (humanAge) {
    let calculatedAge;
    if (humanAge <= 2){
        calculatedAge = humanAge * 10.5;

    }
    else if (humanAge>2){
        let earlyAge =  10.5 * 2;
        let laterAge = (humanAge - 2)* 4
        calculatedAge = earlyAge + laterAge;
    }
return calculatedAge
}

let ageInDogYears = calculateDogYears(age)

console.log(`Your age of ${age} in dog years is ${ageInDogYears}`)

