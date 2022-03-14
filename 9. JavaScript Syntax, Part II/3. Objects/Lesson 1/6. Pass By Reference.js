let spaceShip = {
    name:'Starship',
    crewNum:15
}
// mutation works on objects assigned to both let and const variables
let mutateObject=(obj,prop)=>{
    obj[prop]=10;
}
mutateObject(spaceShip,'crewNum')
console.log(spaceShip.crewNum)

//reassignment how ever does not work or stick even if object is assigned to a variable declared
// with let

let reassignObject=(obj)=>{
    obj = {
        color:'red'
    }
    console.log(obj)
}
reassignObject(spaceShip)
console.log(spaceShip)

// however we can reassign an object assigned to a let variable normally

spaceShip={
    message()
    {
         return 'Welcome Aboard'
    }
}
console.log(spaceShip)
console.log(spaceShip.message())