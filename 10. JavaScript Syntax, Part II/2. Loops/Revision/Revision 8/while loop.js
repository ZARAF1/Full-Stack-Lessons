// converting a for loop into while loop
let count=0;
while(count<10){
    console.log(count);
    count++
}

// while loop when we dont know how many times we will be iterating

let numbers=[1,2,3,4,5,6,7,8,9];
let newNumbers;
while (newNumbers!==6){
    newNumbers=numbers[Math.floor(Math.random()*numbers.length)]
    console.log(newNumbers)
}

// do while

let cupsOfSugarNeeded = 0;
let cupsAdded=0;
do{
    cupsAdded++;
    console.log('cups added: ' + cupsAdded)
}
while(cupsAdded<cupsOfSugarNeeded)