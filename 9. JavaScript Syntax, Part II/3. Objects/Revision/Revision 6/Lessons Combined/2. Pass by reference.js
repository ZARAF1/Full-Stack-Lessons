let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

const greenEnergy = (obj,prop,val) =>{
    obj[prop]=val;
}
greenEnergy(spaceship,'Fuel Type', 'Veg Oil')
console.log(spaceship)


const tryReassignment = (obj) =>{
    obj={
        numCrew:10,
        color:'green'
    }
    console.log(obj)
}

tryReassignment(spaceship)
console.log(spaceship)