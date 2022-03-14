const person ={
    name:"Ali",
    age:28,
    color:'blue'
}

const tryReassignment =obj=>{
    obj={
        name: "Zulfiqar Ali Raffad"
    }
    console.log(obj)
}
tryReassignment(person);
console.log(person)


let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
};
let reassignment = obj => {
    obj = {
        identified : false,
        'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
reassignment(spaceship) // The attempt at reassignment does not work.
console.log(spaceship) // Still returns {homePlanet : 'Earth', color : 'red'};