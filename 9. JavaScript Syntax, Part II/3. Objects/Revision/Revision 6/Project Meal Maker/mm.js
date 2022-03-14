const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishtoCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        this.courses[courseName].push(dish)
    }
}


menu.addDishtoCourse('appetizers','Mozarella Sticks', 15 )
console.log(menu.courses.appetizers)