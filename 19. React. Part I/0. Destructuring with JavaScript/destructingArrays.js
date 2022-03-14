// Example 1

let cars = ['ferrari', 'tesla', 'cadillac'];
// Usual method
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

//Method 2
let [carNo1,carNo2,carNo3]=cars;
console.log(carNo1,carNo2,carNo3)

//Example 2
let colors = ['blue','red','purple'];
let [color1,color2,color3]=colors;
console.log(color1,color2,color3)