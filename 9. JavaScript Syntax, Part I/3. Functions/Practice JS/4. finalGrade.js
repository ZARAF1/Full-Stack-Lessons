/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
* */

const finalGrade=(arg1,arg2,arg3)=>{
    if ((arg1<0 || arg1<0 || arg3<0 )||(arg1>100 || arg1>100 || arg3>100)){
        return `Invalid grade entered`
    }
    let averageGrade=(arg1+arg2+arg3)/3;
    if(averageGrade<60){
        return `F`
    }
    else if(averageGrade<70){
        return 'D'
    }
    else if(averageGrade<80){
        return 'C'
    }
    else if(averageGrade<90){
        return 'B'
    }
    else {
        return 'A';
    }
}

console.log(finalGrade(95,84,90))