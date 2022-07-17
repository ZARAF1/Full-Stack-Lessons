const combineAll=(str1,...otherStrings)=>{
   let combinedString=str1;
    for (let str of otherStrings){
        combinedString+=str;
    }
    console.log(combinedString)

}

combineAll("h","e","l","l","o","w","o","r","l","d")

const sumAll=(num1,...otherNumbers)=>{
    let total=num1;
    for (let i=0;i<otherNumbers.length;i++){
        total+=otherNumbers[i];
    }
    console.log(total)
}
sumAll(1,2,3,4)