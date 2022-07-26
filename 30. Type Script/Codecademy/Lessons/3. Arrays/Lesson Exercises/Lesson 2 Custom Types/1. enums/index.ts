// Example 1
enum Directions {
    north,
    south,
    east,
    west
}

let whichWayToWork:Directions=Directions.west;
console.log(whichWayToWork)


// Example 2
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];

enum Pets {
    rat,
    chinchilla,
    hamster,
    tarantula
}

let petsOnSaleTS:Pets = Pets.chinchilla;

let favPet:Pets=Pets.chinchilla;
console.log(favPet)
favPet=2;


let ordersArrayTS:[Pets,number][]=[[Pets.rat,2],[Pets.chinchilla,1],[Pets.hamster,2],[Pets.chinchilla,50]];

