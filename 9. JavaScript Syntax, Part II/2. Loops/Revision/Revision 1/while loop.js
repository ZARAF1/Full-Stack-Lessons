let numb=[1,2,3,4,5,6];
let currentNumb;
while(currentNumb!==5){
    currentNumb=numb[Math.floor(Math.random()*numb.length)]
    console.log(currentNumb)
}