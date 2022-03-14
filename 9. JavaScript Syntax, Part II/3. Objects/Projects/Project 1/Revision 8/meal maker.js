const menu={
    courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
    // first method to add dish to above course array
    addDishToCourse(courseName,dishName,dishPrice){
        const dish={
            dishName:dishName,
            dishPrice:dishPrice
        }
        this.courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){

        let dishes=this.courses[courseName]
        let randomIndex=Math.floor(Math.random()*dishes.length)
        return dishes[randomIndex]
    },
    generateRandomMeal(){
        let appetizers=this.getRandomDishFromCourse('appetizers');
        let mains=this.getRandomDishFromCourse('mains');
        let desserts=this.getRandomDishFromCourse('desserts')
        let totalPrice=appetizers.dishPrice+mains.dishPrice+desserts.dishPrice;
        return `Your meal is ${appetizers.dishName}, ${mains.dishName}, ${desserts.dishName}. The price is $${totalPrice}.`
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
menu.addDishToCourse('desserts', 'Biryani', 4);

let meal =menu.generateRandomMeal()
console.log(meal)