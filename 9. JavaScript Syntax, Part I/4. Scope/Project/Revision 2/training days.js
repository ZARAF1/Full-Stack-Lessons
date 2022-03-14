const getRandomEvent = () =>{
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:return 'Marathon';
        break;
        case 1:return 'Triathlon';
        break;
        case 2:return 'Pentathlon'
    }
}

const getTrainingDays = event =>{
    let days;
    if (event === 'Marathon'){
        days= 50;
    }
    else if (event === 'Triathlon'){
        days=100;
    }
    else if (event === 'Pentathlon'){
        days=150;
    }
    return days;
}


const logTimeAndEvent = (name,day,event) =>{
    console.log(`${name}'s event is: ${event}`);
    console.log(`${name}'s time to train is: ${day} days`);
}

// the below stores a value of the function call into the variable.
const event = getRandomEvent();
const day=getTrainingDays(event);

logTimeAndEvent('Ali',day,event)

// the below stores a new value of the function call into the new variable event2.
const event2=getRandomEvent();
const day2=getTrainingDays(event2);
logTimeAndEvent('Rana',day2,event2)