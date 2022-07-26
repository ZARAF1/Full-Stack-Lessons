// Example 1
var Directions;
(function (Directions) {
    Directions[Directions["north"] = 0] = "north";
    Directions[Directions["south"] = 1] = "south";
    Directions[Directions["east"] = 2] = "east";
    Directions[Directions["west"] = 3] = "west";
})(Directions || (Directions = {}));
var whichWayToWork = Directions.west;
console.log(whichWayToWork);
// Example 2
var petOnSale = 'chinchilla';
var ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
var Pets;
(function (Pets) {
    Pets[Pets["rat"] = 0] = "rat";
    Pets[Pets["chinchilla"] = 1] = "chinchilla";
    Pets[Pets["hamster"] = 2] = "hamster";
    Pets[Pets["tarantula"] = 3] = "tarantula";
})(Pets || (Pets = {}));
var petsOnSaleTS = Pets.chinchilla;
var favPet = Pets.chinchilla;
console.log(favPet);
var ordersArrayTS = [[Pets.rat, 2], [Pets.chinchilla, 1], [Pets.hamster, 2], [Pets.chinchilla, 50]];
