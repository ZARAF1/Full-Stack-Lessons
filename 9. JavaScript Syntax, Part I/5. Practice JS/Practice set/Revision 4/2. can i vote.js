let randomAge=Math.floor(Math.random()*50)
const canIVote=(age)=>{
    if (age>=18){
        return `yes you can`
    }
    else{
        return 'no you cant'
    }
}
console.log(canIVote(randomAge))