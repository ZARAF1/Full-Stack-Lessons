
// nested loops on strings

let str1='love';
let str2='like';
for (let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
        if(str1[i]===str2[j]){
            console.log(str2[j])
        }
    }
}



// nested loops on arrays

let arr1=['love','like'];
let arr2=['like','lust'];
for (let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            console.log(arr2[j])
        }
    }
}
