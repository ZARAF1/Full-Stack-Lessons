/** For Loop */

// Simple for loop
for (let i=0;i<5;i++){
    console.log(i);
}

// Reverse for loop 

for (let i=10;i>=5;i--){
    console.log(i)
}

// using for loop to iterate over arrays

const newArr = ["A","N","Y","T","H","I","N","G"];
for (let i=0;i<newArr.length;i++){
    console.log(newArr[i]);
}

// nested loops

for (let i=0; i<=5;i++){
    for (let j=5;j<10;j++){
        i===j?console.log("value of j that matches i is "+j):console.log("No match found")
        
    }
}

// another nested loop example

const arr1=["a","b","c","d","e","f","g"];
const arr2=["g","h","i","j","k","l","m"]

for (let i=0;i<=arr1.length;i++){
    for (let j=0;j<=arr2.length;j++){
        if (arr1[i]===arr2[j]){
            console.log(`The similar value that exists in both arrays is ${arr2[j]}`)
        }
    }
}

/** while loop */

let iterator = 0;
while (iterator < 10){
    console.log(iterator);
    iterator++;
}

// while reverse loop

let iter = 10;
while (iter >= 0){
    console.log(iter);
    iter--;
}



/**Do While Loop */

let a=1;

do {
    a++;
    
}
while(a<1)
console.log("Do while value of a is " + a)

