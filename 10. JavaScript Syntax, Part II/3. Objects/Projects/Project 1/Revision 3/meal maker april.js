const menu={
    _courses:{
        _appetizers:[],
        _mains:[],
        _desserts:[],
        get appetizers(){
            return this._appetizers
        },
        set appetizers(appetizersIn){
            this._appetizers=appetizersIn;
        },
        get mains(){
            return this._mains
        },
        set mains(mainsIn){
            this._mains=mainsIn;
        },
        get desserts(){
            return this._desserts
        },
        set desserts(dessertsIn){
            this._desserts=dessertsIn;
        }
    },
    addDishToCourse(courseName,dishName,dishPrice){
        const dish={
            name:dishName,
            price:dishPrice
        }
        this._courses[courseName].push(dish)// just checking using bracket notation
    },
    getRandomDishFromCourse(courseName){
        let dishes=this['_courses'][courseName];
        let randomNumber=Math.floor(Math.random()*dishes.length)
        return dishes[randomNumber]
    },
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');// getter method
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice=appetizer.price + main.price + dessert.price;
        return `Randomly chosen ${appetizer.name}, ${main.name}, ${dessert.name}. Total price is ${totalPrice} for selected options`;
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
menu.addDishToCourse('desserts', 'Jam', 4);

 let meal = menu.generateRandomMeal();
 console.log(meal)
console.log(menu['_courses'].appetizers)