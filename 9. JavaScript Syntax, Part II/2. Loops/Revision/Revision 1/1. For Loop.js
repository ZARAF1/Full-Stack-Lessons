for (let i=0; i<10;i++){
    console.log(i)
}

//or

let arr1=[1,2,3,4]
for (let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// reverse loops
for (let i=10;i>0;i--){
    console.log(i)
}

// nested loops

let arr2=[1,2,3,4,5]
let arr3=[4,5,6,7,8]
for (let i=0;i<arr2.length;i++){
    for (let j=0;j<arr3.length;j++){
        if (arr2[i]===arr3[j]){
            console.log(arr3[j])
        }
    }
    }
