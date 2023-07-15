const myString = 'Hello i am shark man';
const vowels = ['a','e','i','o','u']
const seatTalk=[];
for (let i=0;i<myString.length;i++){
    for (let j=0;j<vowels.length;j++){
        if (myString[i]===vowels[j]){
            seatTalk.push(vowels[j])
            if(vowels[j]==='e'|| vowels[j]==='u'){
                seatTalk.push(vowels[j]);
            }
        }
    }
}
console.log(seatTalk.join(''))