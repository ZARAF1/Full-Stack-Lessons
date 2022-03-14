const menu={
    courses:{
            appetizers:[],
            mains:[],
            desserts:[]
            },
    // adding dishes to the course arrays using a method
    addDishToCourse (courseName,dishName,dishPrice){
      const dish = {
          name:dishName,
          price:dishPrice,
          }
      this.courses[courseName].push(dish)

    }
}

menu.addDishToCourse('appetizers', 'Nuggets',5)
menu.addDishToCourse('appetizers', 'Kurkuray',5)
console.log(menu.courses.appetizers)