let arr1=[1,4,5,8,10];
let arr2=[2,4,6,8,10];
let resultarr=[];
for (let i=0;i<arr1.length;i++){
    for (let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            resultarr.push(arr1[i])
        }
    }
}
console.log(resultarr)