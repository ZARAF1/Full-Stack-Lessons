let spaceShip = {
  name: 'Starship',
  crewNum: 15,
};
// mutation works on objects assigned to both let and const variables
let mutateObject = (obj, prop, val) => {
  obj[prop] = val;
};
mutateObject(spaceShip, 'crewNum', 100);
console.log(spaceShip.crewNum);

//reassignment how ever does not work or stick when using a function even if object is assigned to a variable declared with let

let reassignObject = obj => {
  obj = {
    color: 'red',
  };
  console.log(obj);
};
reassignObject(spaceShip);
console.log(spaceShip);

// however we can reassign an object assigned to a let variable normally

spaceShip = {
  type: 'aero one',
  code: 07115214662,
  message() {
    return 'Welcome Aboard';
  },
};
console.log(spaceShip);
console.log(spaceShip.message());
