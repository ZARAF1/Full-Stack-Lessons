// destructing arrays 

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,truck,suv]=vehicles;
console.log(`${suv} ${truck}  ${suv}`)


const calc = (a,b) =>{
    const addition = a+b;
    const multiplication = a*b;
    const division = a/b;
    const subtraction =a-b;
    return [addition, multiplication, subtraction, division]; 
}

const [addition, multiplication, subtraction, division] = calc (10,2); // returns an array
console.log(addition, multiplication, subtraction, division)


/**  spread operator */

//  lets test that copied arrays change the original array when changed by

let originalArray = [1,2,3,4,5];
let copiedArray = originalArray;

console.log(copiedArray)
copiedArray[0]="ABC";
console.log(originalArray)

