// Write your function here:
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

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 50)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!