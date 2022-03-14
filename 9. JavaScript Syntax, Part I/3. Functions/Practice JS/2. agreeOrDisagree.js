/*

Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!'
if the two strings are the same and 'You disagree!' if the two strings are different.
* */
function agreeOrDisagree(str1,str2){
    if(str1===str2){
        return `You Agree!`
    }
    else {
        return `You Disagree!`
    }
}

console.log(agreeOrDisagree("hello","hello"));