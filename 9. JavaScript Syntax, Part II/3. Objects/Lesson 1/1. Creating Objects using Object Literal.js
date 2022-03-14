let spaceShip = {
    'Fuel Type':'diesel',
    color:'Red',
    crewNum: 15
}
console.log(spaceShip.crewNum)
console.log(spaceShip['color']) // both dot and bracket notation will work for a single string type which does
// not have any special characters such as spaces or numbers or symbols so spaceShip.color will also work
console.log(spaceShip["Fuel Type"]) // cannot use dot notation

