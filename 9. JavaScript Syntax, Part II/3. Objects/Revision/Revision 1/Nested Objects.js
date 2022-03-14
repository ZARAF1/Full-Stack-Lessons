let spaceship = {
    passengers:[{name:'Ali', age:20},{name:'Sully, age:22'}],
    name:'Star Trek Enterprises',
    color:'red',
    crew:{
        captain:{
            name:'Sandra',
            degree: 'Masters in Aerotech',
            message(){
                console.log('Captain Sandra here. Welcome to our Ship!')
            }
        },
        technician:{
            name:'Ali',
            degree:'Masters in Electrical Engineering',
            message(){
                console.log('Technician Ali here. Lets fix things!')
            }
        }
        },
    telescope:{
        model:'XLT',
        'year-built': 2021,
        focalLength:1024
    },
    'nano-electronics':{
        computer:{
            model:'XLS',
            terabytes: 1000,
            monitor: 'HD'
        },
        'back-up':{
            terabytes: 500,
            model:'TLS',
            battery:'lithium'
        }
    }
}

console.log(spaceship["nano-electronics"]["back-up"]['terabytes'])

let returnAnyProp = (objectName, propName) => {
    return objectName[propName]
};

console.log(returnAnyProp(spaceship, 'nano-electronics')); // Returns 'Earth'
console.log(spaceship.passengers[0])