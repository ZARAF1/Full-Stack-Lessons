const spaceship = {
    name:'Star Trek',
    'fuel type': 'Hybrid'
}
console.log(spaceship['fuel type'])
console.log(spaceship['name'])
console.log(spaceship.name)

const returnSpaceshipName = (obj,prop)=>{
    console.log(obj[prop])
}
returnSpaceshipName(spaceship,'name')
spaceship.type='Human';
console.log(spaceship);
spaceship['fuel type']='Vegetable Oil';
console.log(spaceship)

// spaceship={numCrew:10}