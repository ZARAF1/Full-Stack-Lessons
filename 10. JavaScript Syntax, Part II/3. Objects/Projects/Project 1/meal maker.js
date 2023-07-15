const menu={
            _courses:{
                appetizers:[],
                mains:[],
                desserts:[]
                     },

            addDishToCourse(courseName,dishName,dishPrice){
                    const dish={
                                name:dishName,
                                price:dishPrice
                                }
                    this._courses[courseName].push(dish)

    },
    getRandomDishFromCourse(courseName){
        let dishes=this._courses[courseName];
        let randomIndex=Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`
    }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Russian Salad', 4.5);
menu.addDishToCourse('appetizers', 'Pakistani Salad', 5);

menu.addDishToCourse('mains', 'Chicken Curry', 10);
menu.addDishToCourse('mains', 'Tandori Chicken', 15);
menu.addDishToCourse('mains', 'Biryani', 25);

menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Lassi', 3);
menu.addDishToCourse('desserts', 'Biryani', 4);

let meal = menu.generateRandomMeal();
console.log(meal)