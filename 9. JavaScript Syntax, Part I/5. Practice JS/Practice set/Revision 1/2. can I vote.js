/*
// using function expression
const canIVote=function(age){
if(age>=18){
return true;
}
else{
return false;
 }
 }
 */


/*
// using arrow function
const canIVote=(age)=>{
if(age>=18){
return true;
}
else{
return false;
 }
 }
 */

function canIVote(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}


console.log(canIVote(17))