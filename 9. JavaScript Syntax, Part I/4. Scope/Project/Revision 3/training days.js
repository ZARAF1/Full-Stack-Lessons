let randomNumber =()=>{
    return Math.floor(Math.random()*3)
}
let randomNum=randomNumber();

let getRandomEvent=(rn)=>{
    if(rn===0){
        return "Marathon"
    }
    else if(rn===1){
        return "Triathlon"
    }
    else if (rn===2){
        return "Pentathlon"
    }
}

let event = getRandomEvent(randomNum);

const getTrainingDays=(event)=>{
    if (event==="Marathon"){
        return 50;
    }
    else if(event==="Triathlon"){
        return 100;
    }
    else if (event==="Pentathlon"){
        return 150;
    }
}

let days=getTrainingDays(event)
let name="Ali"

const logEventAndDays =(name,event,days)=> {
    console.log(`${name} performs in ${event} and trains for ${days}`)
}

logEventAndDays(name,event,days)