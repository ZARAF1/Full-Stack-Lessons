// for loop

for (let i=0;i<6;i++){
    console.log(i)
}

// loop in reverse

for (let i=10;i>0;i--){
    console.log(i)
}

//loop through arrays

let myArray = [1,2,3,4,5,6]
console.log(myArray.length)
for (let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}

//looping array in reverse

for (let i=myArray.length-1;i>=0;i--){
    console.log(myArray[i])
}

// nested Loops

const arr1=[1,2,3,4,5]
const arr2=[3,4,5,6,7]
for (let i=0;i<arr1.length;i++){
    for (let j=0;j<arr2.length;j++){
        if (arr1[i]===arr2[j]){
            console.log(`Common numbers are ${arr2[j]} in both the arrays.`)
        }
    }
}


// while loops (when you dont know how many times a code shall run)

const cards=['spade','diamond','heart','club'];
let currentCard;
while (currentCard!=='spade'){
    currentCard=cards[Math.floor(Math.random()*cards.length)];
    console.log(currentCard)
}
/// another example

let count=0;
while(count<5){
    console.log(count);
    count++;
}

// do while


