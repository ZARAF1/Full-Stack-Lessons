let birthYear;
const howOld=function (age,year){
    let currentYear=2021;
    birthYear=currentYear-age;

    if(year>currentYear){
        return `You will be ${age+(year-currentYear)} in the year ${year}`
    }
    else if(year<birthYear){
        return `The year ${year} was ${year-birthYear} years before you were born`
    }
    else if(year>birthYear && year<currentYear){
        return `You were ${age-(currentYear-year)} in the year ${year}`
    }

}
console.log(howOld(40,1982))
console.log(birthYear)