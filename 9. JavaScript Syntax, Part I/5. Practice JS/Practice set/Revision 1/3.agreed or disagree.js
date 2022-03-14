const agreeOrDisagree=(str1,str2)=>{
    if (str1===str2){
        return 'We agree!'
    }
    else{
        return 'We disagree!'
    }
}
console.log(agreeOrDisagree('hello','hello'))