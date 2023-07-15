const arr1=[1,2,3,4];
const arr2=[4,5,6,7];
for (let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            console.log(arr2[j])
        }
    }
}


// another example
const bobsFollowers = ['Ali','Sabrine','Shaheen','Asima']
const tinasFollowers =['Sohail','Ali','Sabrine'];
const mutualFollowers=[];
for (let i=0;i<bobsFollowers.length;i++){
    for(let j=0;j<tinasFollowers.length;j++){
        if(bobsFollowers[i]===tinasFollowers[j]){
            mutualFollowers.push(tinasFollowers[j])
        }
    }
}
console.log(mutualFollowers)