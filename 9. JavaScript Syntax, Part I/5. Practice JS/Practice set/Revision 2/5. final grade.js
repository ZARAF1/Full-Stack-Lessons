function finalGrade(mark1,mark2,mark3){
    if ((mark1<0 || mark2<0 || mark3<0)||(mark1>100 || mark2>100 || mark3>100)){
        return 'You have entered invalid mark'
    }

    let averageMark=(mark1+mark2+mark3)/3;
    if (averageMark<60){
        return 'F';
    }
    else if(averageMark<70){
        return 'D';
    }
    else if (averageMark<80){
        return 'C';
    }
    else if(averageMark<90){
        return 'B';
    }
    else {
        return 'A';
    }
}
console.log(finalGrade(80,80,80))