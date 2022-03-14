let spaceship={
    name:'star trek',
    'year built': 2021,
    telescope:{
        'year built': 2020,
        focalLength:1024,
        model:'xlt212121'
    },
    crew:{
        captain:{
            name: 'Rana Sandouka',
            degree:"Software Engineer",
            'birth year': 1982,
            'favorite food': ['pasta','fruits','batata']
        },
        'network engineer':{
            name: 'Ali Raffad',
            degree:"Software Engineer",
            'birth year': 1982,
            'favorite food': ['pasta','fruits','batata']
        },
        pilot:{
            name: 'Rayyan Raffad',
            degree:"Aeronautical Engineer",
            'birth year': 2008,
            'favorite food': ['pasta','fruits','batata']
        }
    }
}

console.log(spaceship.crew['network engineer'])
console.log(spaceship.crew.captain['favorite food'][0])
22