const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
};

let paintSpaceship=(obj,key,value)=>{
    obj[key]=value
}

paintSpaceship(spaceship,'color','red')

console.log(spaceship)