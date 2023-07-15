let arrayWithContents = ["Strings", "inside", "an", "array"];

for (let i=0;i<arrayWithContents.length;i++){
    console.log(arrayWithContents[i])
}

for (let idx in arrayWithContents){
    console.log(arrayWithContents[idx])
}

for (let val of arrayWithContents){
    console.log(val)
}