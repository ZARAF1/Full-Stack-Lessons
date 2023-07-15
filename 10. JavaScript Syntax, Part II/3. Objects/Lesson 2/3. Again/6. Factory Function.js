let carFactory = (name, model, color) => {
    return {
        name,
        model,
        color
    }
}


/*
let car = carFactory("Ford", "XYZ", "Green")
console.log(car);*/


let ford = [];
car = carFactory('astra', 2021, 'Red')
ford.push(car)
car = carFactory('benzy', 2021, 'Red')
ford.push(car)
console.log(ford)

