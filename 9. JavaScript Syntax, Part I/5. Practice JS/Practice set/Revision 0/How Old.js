// Write your function here:
let howOld = (age, year) => {
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentYear - age;
    let yearDifference;
    let calculatedAge;
    if (year > currentYear) {
        yearDifference = year - currentYear
        calculatedAge = age + yearDifference;
        return `You will be ${calculatedAge} in the year ${year}`
    }
    if (year < yearOfBirth) {
        calculatedAge = yearOfBirth - year;
        return `The year ${year} was ${calculatedAge} years before you were born`
    }
    if (year < currentYear && year > yearOfBirth)
        yearDifference = currentYear - year;
    calculatedAge = age - yearDifference;
    return `You were ${calculatedAge} in the year ${year}`
}
console.log(howOld(20, 2015))
console.log(howOld(40, 1982))


// Once your function is written, write function calls to test your code!
