const menu = {
    courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
    // adding a method through which we will add dishes to different courses in the menu

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name:dishName,
            price:dishPrice,
        }
        this.courses[courseName].push(dish);
    },
    getRandomMealFromCourse(courseName) {
        let dishes = this.courses[courseName];
        let randomNumber = Math.floor(Math.random()*dishes.length)
        return dishes[randomNumber]
    },
    generateRandomMeal(){
        let appetizerMeal = this.generateRandomMeal('appetizers');
        let mainMeal= this.generateRandomMeal('mains');
        let dessertMeal=this.generateRandomMeal('desserts')
        return
    }


}