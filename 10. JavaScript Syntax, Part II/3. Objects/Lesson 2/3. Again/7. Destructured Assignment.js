let goat = {
    name: 'Billy',
    sound: 'Baaa',
    food: {
        Veg: {
            type: 'Grass'
        },
        Lactose: {
            type: 'Milk'
        }
    }
}

let {name} = goat;
console.log(name)

let {Veg} = goat.food;
console.log(Veg)

let {food} = goat;
console.log(food);
console.log(food.Veg)