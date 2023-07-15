let str1="Worded"

for (const word of str1){
    console.log(word)
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
for (let element of arr1){
    if (element===2){
        continue;
    }
    console.log(element)
}