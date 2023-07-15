/*
const myArr=[19,20,30];
const yourArr=[20,19,50];
for (let i=0;i<myArr.length;i++){
    for(let j=0;j<yourArr.length;j++){
        if (myArr[i]===yourArr[j]){
            console.log(`The number ${yourArr[j]} matches both arrays`)
        }
*/
// Another Example
/*
const myArr=[19,20,30];
const yourArr=[20,19,50];
for (let i=0;i<myArr.length;i++){
    for(let j=0;j<yourArr.length;j++){
        if (myArr[i]===yourArr[j]){
            console.log(`The number ${yourArr[j]} matches both arrays`)
        }
        else{
            console.log(`The number ${myArr[i]} and ${yourArr[j]} do not match`)
        }
    }
}
*/
// Final Example
/*

// Write your code below
const bobsFollowers = ['Ali','Sabrine','Shaheen','Asima']
const tinasFollowers =['Sohail','Ali','Sabrine'];
const mutualFollowers = [];
for (let i=0;i<bobsFollowers.length;i++){
    for (let j=0;j<tinasFollowers.length;j++){
        if (bobsFollowers[i]===tinasFollowers[j]){
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}
console.log(mutualFollowers)*/
// another example
const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
    for (let j = 1; j < 4; j++) {
        console.log(j);
    }
}
