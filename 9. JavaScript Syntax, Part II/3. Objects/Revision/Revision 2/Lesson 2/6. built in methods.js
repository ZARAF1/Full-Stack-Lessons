let spaceship={
    crewNum:15,
    crew:{
        captain: {
            name: 'Sandra',
            age: 39,
            degree: 'CS',
            message: function () {
                console.log('lets go infinite')
            }
        },
        engineer:{
            name: 'Ali',
            age: 39,
            degree: 'CS',
            message: function () {
                console.log('lets go infinite')
            }
        }
    },
    'nano-electronics':{
        computer:{
            capacity:1024,
            monitor:'HD'
        },
        'back-up':{
            type:'lithium',
            size:1024,
            model:'XLT'
        }
    }
}

console.log(Object.keys(spaceship))
console.log(Object.keys(spaceship.crew))

console.log(Object.entries(spaceship))


// another object

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target,source)
console.log(returnedTarget)

const newSpaceShip=Object.assign({color:'red', passengers:'none'},spaceship)
console.log(newSpaceShip)
