for (let count=0;count<=15;count++){
    console.log(count)
}

// looping through an array
let arr=[1,2,3,4];
for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// looping in reverse

for (let i=5;i>0;i--){
    console.log(i)
}

// nested loop
let arr2=[1,2,3,4,5];
let arr3=[3,4,5,6,7];
for (let i=0;i<arr2.length;i++){
    for(let j=0;j<arr3.length;j++){
        if(arr2[i]===arr3[j]){
            console.log(arr3[j])
        }
    }
}

// while loops
let i=0;
while(i<5){
    console.log(i);
    i++;
}

// another while loop
let foods=['chowmein','biryani','pasta','curry'];
let currentFood;
while(currentFood!=='pasta'){
    currentFood=foods[Math.floor(Math.random()*foods.length)]
   console.log(currentFood)
}


// do while