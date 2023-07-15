const calculateDogYears = personsAge => {
    let dogYears;
    let earlyAge;
    let laterAge;
    if (personsAge <= 2) {
        dogYears = personsAge * 10.5
    } else {
        earlyAge = 2 * 10.5;
        laterAge = (personsAge - 2) * 4
        dogYears = earlyAge + laterAge;
    }
    return dogYears;

}

console.log(calculateDogYears(5))