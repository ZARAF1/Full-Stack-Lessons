let spaceship = {
    name:'Star Trek',
    'fuel type':'hybrid',
    crew:{
        captain:{
            name:'Sandra',
            degree:'AeroSpace Engineering',
            'favorite food':['Spinach', 'Patatoes', 'McDonalds Diam IceCream'],
            message(){
                console.log('Captain here. Welcome Aboard!')
            }
        },
        'electrical engineer':{
            name:'Ali',
            degree:'Electrical Engineering',
            'favorite food':['Brocolli', 'Chips', 'Gummy Bears'],
            message(){
                console.log('I fix things here')
            }
        }
    },
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    }
}

let getName  = (obj,prop)=>{
    console.log(obj[prop])
}
getName(spaceship,'name')


let changeName  = obj => {
    obj.name='Millers Planet'
}
changeName(spaceship)
console.log(spaceship)