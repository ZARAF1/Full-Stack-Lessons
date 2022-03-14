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
console.log(spaceship['nano-electronics']['back-up'].model)

for (let crewMember in spaceship.crew){
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

// destructured assignment from advanced object lesson
let {type}=spaceship['nano-electronics']['back-up']
console.log(type)