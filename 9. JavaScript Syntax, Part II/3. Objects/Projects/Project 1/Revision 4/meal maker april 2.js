const menu={
            courses:{
                    _appetizers:[],
                    _mains:[],
                    _desserts:[],
                    // getters and setters method so that we dont directly manipulate object properties
                    get appetizers(){
                        return this['_appetizers'];
                    },
                    set appetizers(appetizersIn){
                        this['_appetizers'].push(appetizersIn);
                    },
                    get mains(){
                        return this['_mains'];
                    },
                    set mains(mainsIn){
                        this['_mains'].push(mainsIn);
                    },
                    get desserts(){
                    return this['_desserts'];
                    },
                    set desserts(dessertsIn){
                    this['_desserts'].push(dessertsIn);
                    }

                    },

            addDishToCourse(courseName,dishName,dishPrice){
                const dish={
                    name:dishName,
                    price:dishPrice,
                }
                this['courses'][courseName]=dish; // calls setter method based on course name

            },

            getRandomDishFromCourse(courseName){
                let randomDish = this.courses[courseName]; // calls getter method based on course name
                let randomIndex= Math.floor(Math.random()*randomDish.length);
                return randomDish[randomIndex]
            },

            generateRandomMeal(){
                let appetizer=this.getRandomDishFromCourse('appetizers');
                let main=this.getRandomDishFromCourse('mains');
                let dessert=this.getRandomDishFromCourse('desserts');
                let totalCost=appetizer.price + main.price + dessert.price;

                return `The randomly selected meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price for all three selections is ${totalCost}`
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