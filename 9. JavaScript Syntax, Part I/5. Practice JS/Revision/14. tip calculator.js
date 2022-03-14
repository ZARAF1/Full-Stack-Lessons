// exercise 1
const greetWorld = () =>{
    return "Hello World!"
}
console.log ("exercise 1: " + greetWorld())

// exercise 2 canIVote
const canIVote = age =>{
    return age>=18?true:false;
}
console.log("Can i Vote: "+canIVote(18))
// exercise 3: agreeOrDisagree
const agreeOrDisagree=(str1,str2)=>{
    return str1===str2?"agree":"disagree"
}
console.log(agreeOrDisagree("peep","peep"))

// exercise 4: life phase
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}

console.log(lifePhase(18))

// exercise 5: final grade

const finalGrade = (grade1,grade2,grade3)=>{
   if ((grade1 < 0 || grade2<0 || grade3 <0) || (grade1 > 100 || grade2 > 100 || grade3 > 100)){
       return "You have entered an invalid grade."
   }
    let average=(grade1+grade2+grade3)/3;

    if(average<60){
        return 'F'
    }
    else if(average<70){
        return 'D'
    }
    else if(average<80){
        return 'C'
    }
    else if(average<90){
        return 'B'
    }
    else{
        return 'A'
    }

}
}