/*
for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
        break;
    }
    console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');*/

//another example
/*
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i=0; i<rapperArray.length;i++){
    console.log(rapperArray[i]);
    if (rapperArray[i]==='Notorious B.I.G.'){
        break;
    }
}
console.log("And if you don't know, now you know.")
*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
let selectedRappers=[];
for (let i=0; i<rapperArray.length;i++){
    console.log(rapperArray[i]);
    if (rapperArray[i]!=='Notorious B.I.G.'){
        selectedRappers.push(rapperArray[i]);
    }
    else {
        break;
    }
}
console.log(selectedRappers)