for (let i=0;i<5;i++){
    console.log(i)
}

let arr=[0,1,2,3,4,5,6,7,8,9,10];
let evenArray=[];
for (let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenArray.push(arr[i])
    }
}
console.log(evenArray)

let nestedArr = [[1,2], [3,4], [5,6]];

for (let i=0;i<nestedArr.length;i++){
    for (let j=0;j<nestedArr[i].length;j++){
        console.log(nestedArr[i][j])
    }
}
let i=1
do{
    console.log(i)
    i++
}while(i===0)


let arrNew=[0,1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<arrNew.length;i++){
    if (arrNew[i]===5){
        continue;
    }
    else{
        console.log(arrNew[i])
    }
}