let countString = '';
let i = 0;

do {
    countString = countString + i;
    console.log(countString);
    i++;
} while (i < 5);


//  above example in for loop
let countStr='';
for (let i=0;i<5;i++){
    countStr=countStr+i;
    console.log(countStr)
}
console.log(countStr);

// above example in while loop

let countSrings='';
let j=0;
while(j<5){
    countSrings=countSrings+j;
    console.log(countSrings) // this prints countStrings before countStrings variable on top gets updated and cpncatenates
    //into a single string
    j++;
}

console.log(countSrings)

// checking if do while runs code once

let t=200
do {
    console.log(t)
    t++
}
while(t<200)


// another example
let name='Ali'
let x=0;
do {
    console.log(name);
    x++;
}
while(x<0)