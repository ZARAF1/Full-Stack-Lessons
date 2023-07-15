let countString = '';
let i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);

console.log(countString);


let cupsSugarNeeded = 0;
let cupsAdded=0;
do {
    cupsAdded+=1;
    console.log(cupsAdded)
}
while(cupsAdded<cupsSugarNeeded)