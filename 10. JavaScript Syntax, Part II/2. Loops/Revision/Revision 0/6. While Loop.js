const animals = ['bear','panda','elephant'];
let currentAnimal;
while(currentAnimal!=='bear'){
    currentAnimal=animals[Math.floor(Math.random()*animals.length)]
    console.log(currentAnimal)
}
// another similar while loop
    let foods=['chowmein','biryani','pasta','curry'];
let currentFood;
while(currentFood!=='pasta'){
    currentFood=foods[Math.floor(Math.random()*foods.length)]
    console.log(currentFood)
}
// another while loop on array simple
let arr4=[1,2,3,4];
let j=0;
while(j<arr4.length){
    console.log(arr4[j]);
    j++
}

//another while loop simple
let i=0;
while(i<5){
    console.log(i)
    i++
}