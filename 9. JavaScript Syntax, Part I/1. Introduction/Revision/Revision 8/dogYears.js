// first two years of persons age calculates to 10.5 of dog years the rest calculates to 4 years each

const personsAge = process.argv[2];
const calculateAge = age => {
    let earlyAge;
    let laterAge;
    let resultingAge;
    if (age <= 2) {
        resultingAge = age * 10.5

    } else if (age > 2) {
        earlyAge = 2 * 10.5;
        laterAge = (age - 2) * 4;
        resultingAge = earlyAge + laterAge;

    }
    return resultingAge;
}
console.log(calculateAge(personsAge))