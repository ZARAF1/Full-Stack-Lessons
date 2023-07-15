let arr1=['a','b','c','d','a'];
let arr2=['a','b','c','d','a','b','c','d','d']
let count=0;
arr2.forEach(elementOne=>{

    if (arr1.includes(elementOne)===true){
            count++;
        }
    console.log(`${elementOne} appears ${count} times!`)
    })

