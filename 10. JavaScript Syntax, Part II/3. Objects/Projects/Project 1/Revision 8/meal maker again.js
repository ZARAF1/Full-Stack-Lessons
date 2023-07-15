const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
             },
    addDishToCourse (courseName, dishName, dishPrice){
        // create a dish object and then assign it to the course category based on the name from parameters list
        const dish = {
            dishName,
            dishPrice
            }
        this.courses[courseName].push(dish)
    },
    generateRandomDishFromCourse(courseName){
        //get a random dishes from the course passed in as parameter
        let dishes = this.courses[courseName];
        let randomNumber=Math.floor(Math.random()*dishes.length)
        return dishes[randomNumber]
    },

    generateRandomMeal(){
        let appetizers = this.generateRandomDishFromCourse('appetizers');
        let mains= this.generateRandomDishFromCourse('mains');
        let desserts= this.generateRandomDishFromCourse('desserts');
        const totalPrice = appetizers.dishPrice + mains.dishPrice + desserts.dishPrice;

        return `We have randomly selected for you ${appetizers.dishName}, ${mains.dishName}, ${desserts.dishName}. Total price is ${totalPrice}`
    }
}
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Russian Salad', 4.5);
menu.addDishToCourse('appetizers', 'Pakistani Salad', 5);

menu.addDishToCourse('mains', 'Chicken Curry', 10);
menu.addDishToCourse('mains', 'Tandori Chicken', 15);
menu.addDishToCourse('mains', 'Biryani', 25);

menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Lassi', 3);
menu.addDishToCourse('desserts', 'Firni', 4);


let meal = menu.generateRandomMeal();
console.log(meal)