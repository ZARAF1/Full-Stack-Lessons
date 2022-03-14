//
const getRandomEvent = () =>{
    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0) {
        return 'Marathon';
    } else if (randomNumber === 1) {
        return 'Triathlon';
    } else if (randomNumber === 2) {
        return 'Pentathlon';
    }
};



//

const getTrainingDays = event =>{
    let days;
    if (event === 'Marathon'){
        days = 50;
    }
    else if(event === 'Triathlon'){
        days = 100;
    }
    else if(event === 'Pentathlon'){
        days = 200;
    }
    return days;
}


// log event

const logEvent = (name,event)=>{
    console.log(`${name}'s event is: ${event}`);
}


const logTime = (name,days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

let event = getRandomEvent();
let days = getTrainingDays(event)

logEvent('Ali',event)
logTime('Ali',days)

const event2 = getRandomEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Rana';

logEvent(name2, event2);
logTime(name2, days2);