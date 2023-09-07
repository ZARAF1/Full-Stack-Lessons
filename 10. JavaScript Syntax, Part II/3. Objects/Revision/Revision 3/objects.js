//  creating objects

let spaceShip = new Object();
spaceShip.name = 'Star Trek Enterprise';
spaceShip.crewNum = 20;
spaceShip.crew = new Object();
spaceShip.crew.pilot = new Object();
spaceShip.crew.pilot.name = 'Ali';
spaceShip.crew.pilot.age = 40;
spaceShip.crew.pilot.favFoods = ['spinach', 'brocolli', 'nashpati'];
spaceShip.crew.pilot.message = () => {
  return `Its my life its now or never!`;
};
spaceShip['fuel type'] = 'diesel';
(spaceShip.flightPath = [
  { planet: 'Mars', month: 'Feb' },
  { planet: 'Jupiter', month: 'April' },
]),
  console.log(spaceShip.crew.pilot.message());
console.log(spaceShip['fuel type']);
console.log(spaceShip.crew.pilot.favFoods[0]);
console.log(spaceShip);
console.log(spaceShip.flightPath[1].planet);

//  pass by reference
const changeObject = (obj, prop, val) => {
  obj[prop] = val;
};
changeObject(spaceShip, 'color', 'red');
console.log(spaceShip);

// reassignment does not stick when using function even for an object declared with let
function reassignObject(obj) {
  obj = {
    age: 40,
  };
}
console.log('<<<Marker>>>');
reassignObject(spaceShip);
console.log(spaceShip);
