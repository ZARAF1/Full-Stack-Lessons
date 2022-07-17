let spaceship={
    name:'Star Trek Enterprise',
    'mission-statement':'Look for opportunities far and beyond',
    color:'red',
    crewNum: 15,
    flightPath:[{planet:'Mars',month:'Feb'},{planet:'Jupiter', month:'April'}],
    telescope:{
        model:'XLT',
        'year-built':2021,
        focalLength:2032
    },
    crew:{
        captain:{
            name:'Sandra',
            degree:'computer sciences',
            message(){
                return `We can do it buggers`
            }

        },
        cook:{
            name:'Lee',
            degree:'cookery arts',
            message(){
                return `Eat what is on your plate and thank me later`
            }
        },
        technician:{
            name:'Alfred',
            degree:'Phd. Physics and Electronics',
            message(){
                return `Break something and i will show you some space`
            }
        },
        other:[{mechanic:{name:'Ali',degree:'Mechanical Engineering',message(){return `I fix, even your parts`}}},
            {driver:{name:'Lion', degree:'Aeronautical Engineering', message(){return `Buckle up`}}}]
    },
    'nano-electronics':{
        computer:{
            monitor:'HD',
            battery:'Lithium',
            terabytes:1000
        },
        'back-up':{
            battery:'Lithium',
            terabytes: 100,
            company:'tesla'
        }
    }
}
console.log(spaceship['nano-electronics']['back-up'].battery);
console.log(`${spaceship.crew.captain.name}: ${spaceship.crew.captain.degree}`);
console.log(spaceship.crew.other[0].mechanic.name)
console.log(spaceship.flightPath[0])

for (let members in spaceship.crew){
    console.log(`${members}: ${spaceship.crew[members].degree}`)
}

console.log(spaceship.flightPath[0].planet)