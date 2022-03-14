// Write function below
function isEven(number){
    let remainder=number%2
    if(remainder===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4))