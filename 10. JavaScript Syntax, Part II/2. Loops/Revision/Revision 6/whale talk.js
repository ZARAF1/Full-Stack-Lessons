let input = 'my name is sabrine and i am the queen of the sea'
input=input.toLowerCase()
let vowels=['a','e','i','o','u']
let resultArray=[];

for (let i=0;i<input.length;i++){
    //console.log(i)
    for (j=0;j<vowels.length;j++){
        if (input[i]===vowels[j]){
            resultArray.push(vowels[j]);
            if(vowels[j]==='e'|| vowels[j]==='u'){
                resultArray.push(vowels[j]);
            }
        }
    }
}
console.log(resultArray.join(' '))