function finalGrade(mark1,mark2,mark3){
    if ((mark1<0||mark2<0||mark3<0)||(mark1>100||mark2>100||mark3>100)){
        return 'invalid grade entered!'}

    let averageGrade=(mark1+mark2+mark3)/3;

    if(averageGrade>=0 && averageGrade<60){
        return 'F'
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
    else{
        return 'A'
    }

}
console.log(finalGrade(80,100,80));
/*


    let finalGrade =(mark1,mark2,mark3)=>{
        if((mark1<0 || mark2<0 || mark3<0)||(mark1>100 || mark2>100 || mark3>100)){
            return 'You have entered an invalid grade.'
        }

        let average=(mark1+mark2+mark3)/3;

        if(average>=0 && average<60){
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
*/

