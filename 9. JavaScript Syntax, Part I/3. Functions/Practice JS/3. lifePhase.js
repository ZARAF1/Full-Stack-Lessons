/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
* */
const lifePhase =(age)=>{
    if (age < 4){
        return 'baby';
    }
    else if(age <13){
        return `child`;
    }
    else if (age<20){
        return `teen`;
    }
    else if(age<65){
        return `adult`
    }
    else if(age<141){
        return `senior adult`
    }
    else if(age<0 || age>140){
        return `Age is not valid`
    }
}
console.log(lifePhase(141))