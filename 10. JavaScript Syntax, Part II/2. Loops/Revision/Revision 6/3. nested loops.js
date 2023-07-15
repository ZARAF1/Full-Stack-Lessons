let myArray=[1,2,3,4,5];
let yourArray=[5,6,7,8,9]
for (let i=0;i<myArray.length;i++){
    for(let j=0;j<yourArray.length;j++){
        if(myArray[i]===yourArray[j]){
            console.log(yourArray[j])
        }
    }
}