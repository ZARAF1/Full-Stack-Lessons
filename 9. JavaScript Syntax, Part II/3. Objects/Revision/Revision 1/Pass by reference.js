const spaceship = {
    name:'Star',
    color: 'Red',
    passengers:[{name:'lee', age:20},{name:'tim', age:22}]
}
// mutation is permanent when variable assigned to object is passed as a parameter into a function
const changeObj = (obj) =>{
    obj.color='glorious gold';
}

changeObj(spaceship)
console.log(spaceship)

// reassignment does not stick
