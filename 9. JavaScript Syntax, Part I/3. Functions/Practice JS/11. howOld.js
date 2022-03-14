/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is
currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'


If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'

*/

const howOld=(age,year)=>{
    let currentYear=2021;
    let birthYear= currentYear-age;

   // If the year is in the future, you should return a string in the following format:
     //   'You will be [calculated age] in the year [year passed in]'

    if (year>currentYear){
    let calculatedAge = (year-currentYear)+age
        return `You will be ${calculatedAge} in the year ${year}`
    }
    //If the year is before they were born, you should return a string in the following format:
      //  'The year [year passed in] was [calculated number of years] years before you were born'
    else if (year<birthYear){
        let calculatedAge = year-birthYear;
        return `'The year ${year} was ${calculatedAge} years before you were born'`
    }
    else if (year<currentYear && year>birthYear){
        let calculatedAge= age-(currentYear - year);
            return `You were ${calculatedAge} in the year ${year}`;
    }
}

console.log(howOld(38,1989))