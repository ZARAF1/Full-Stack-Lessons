let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo';
console.log(condiments)
condiments = ['Mayo'];
console.log(condiments)

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[4] = 'Spoon'; // still mutable
// utensils=[123,456,789] // will not work
console.log(utensils)
console.log(utensils.length);
// utensils = [1, 2, 3] //TypeError: Assignment to constant variable.