let str1="hello";
let str2="hello";

function agreeDisagree(string1,string2){
    if(str1===str2){
        return `We Agree`
    }
    else{
        return `We Disagree`
    }
}

console.log(agreeDisagree(str1,str2))