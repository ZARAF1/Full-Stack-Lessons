let ageOfPerson = 3; //process.argv[2]

function calculateAge(age) {
    let earlyAgeInDogYears;
    let laterAgeInDogYears;
    let totalAgeInDogYears;

    if (age > 2) {
        earlyAgeInDogYears = 2 * 10.5;
        laterAgeInDogYears = (age - 2) * 4;
        totalAgeInDogYears = earlyAgeInDogYears + laterAgeInDogYears;
    } else {
        totalAgeInDogYears = age * 10.5
    }
    return totalAgeInDogYears;
}

console.log(calculateAge(ageOfPerson))