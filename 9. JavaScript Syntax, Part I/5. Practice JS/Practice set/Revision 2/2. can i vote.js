function canIVote(age){
    if (age<18){
        return 'You can not vote'
    }else{
        return 'Yes you can!'
    }
}
console.log(canIVote(18))