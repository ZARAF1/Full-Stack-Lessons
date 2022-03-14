const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
};

let paintIt = (prop) => {
    spaceship[prop] = 'glorious gold'
};

paintIt('color');

console.log(spaceship.color)