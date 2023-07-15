const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

let newArray=[];

for (let i=0;i<valid1.length;i++) {
    if (i < valid1.length - 1) {
        newArray.push(valid1[i])
    }
}
console.log(newArray)
let reversedArray=[]
for (let i=newArray.length-1;i>=0;i--){
    reversedArray.push(newArray[i])
}
console.log(reversedArray)
let doubledArray = [];
const checkCred = (arr)=>{
    for (let i=0; i<arr.length;i++) {
         if (i % 2 === 0) {
            let unchangedValue=arr[i]
            doubledArray.push(unchangedValue)
        } else if (i % 2 === 1) {
            let changedValue=arr[i]*2
            doubledArray.push(changedValue)
        }

    }
}

checkCred(reversedArray)
console.log(doubledArray)
