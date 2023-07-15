let stringToConvert = "hellou";
let vowelsArray = ['a','e','i','o','u'];
let stringArray = [];
let resultArray = [];

for (let character of stringToConvert){
    if (character === " "){
        continue;
    }else {
        stringArray.push(character)
    }
}

for (let char of stringArray){
    for (let vowel of vowelsArray){
        if (char===vowel){
            resultArray.push(vowel)
            if (vowel === "e" || vowel==="u"){
                resultArray.push(vowel)
            }
        }
    }
}
/*
for (let i=0;i<stringArray.length;i++){
    for (let j=0;j<vowelsArray.length;j++){
        if (stringArray[i]===vowelsArray[j]){
            resultArray.push(vowelsArray[j])
            if (vowelsArray[j]==='e' || vowelsArray[j]==='u'){
                resultArray.push(vowelsArray[j])
            }
        }

    }
}*/
console.log(resultArray)


