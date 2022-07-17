let spaceShip = {
    'Fuel Type':'diesel',
    color:'Red',
    crewNum: 15
}
// using dot notation
let spaceShipColor=spaceShip.color;
console.log(spaceShipColor)


// using bracket notation
let typeOfFuel = spaceShip["Fuel Type"];
console.log(typeOfFuel)
console.log(spaceShip["color"])

console.log(spaceShip["crewNum"])

// using functions we have to use bracket notation
let myFunc=(obj,prop)=>{
   console.log('this wont work hence color is : ' + obj.prop);
    console.log('this will work hence color is : ' + obj[prop])
}
myFunc(spaceShip,'color')
