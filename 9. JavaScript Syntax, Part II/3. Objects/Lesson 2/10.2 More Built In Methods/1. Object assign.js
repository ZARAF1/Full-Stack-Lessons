const robot = {
    name:'milton',
    yearBuilt:2021,
    mobile:true,

}

const newRobot = Object.assign({sentient:true}, robot)
console.log(newRobot)