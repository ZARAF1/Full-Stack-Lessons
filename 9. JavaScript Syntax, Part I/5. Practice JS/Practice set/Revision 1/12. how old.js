const howOld=(age,year)=>{
    let currentYear= 2020;
    let birthYear=currentYear-age;
    let futureAge;
    let pastAge;
    let ageBeforeBirth;
    let difference;

    if(year<birthYear){
        ageBeforeBirth = year-birthYear;
        return `You were ${ageBeforeBirth} in the year ${year}`;
    }

    if (year<currentYear){
        pastAge=currentYear-year;
        return `You were ${pastAge} in the year ${year}`

    }
    if (year>currentYear){
        difference=year-currentYear;
        futureAge=age + difference;
        return `You will be ${futureAge} in the year ${year}`
    }
}

console.log(howOld(20,2045))