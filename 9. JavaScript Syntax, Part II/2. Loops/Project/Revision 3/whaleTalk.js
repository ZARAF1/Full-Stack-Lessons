let text ="hello my whalu";
let vowels =['a','e','i','o','u'];
let whaleTalk=[];
for (let i=0;i<text.length;i++){
    for (let j=0;j<vowels.length;j++){
        if(text[i]===vowels[j]){
            whaleTalk.push(text[i])

            if (text[i]==='e'){
                whaleTalk.push(text[i])
            }else if(text[i]==='u'){
                whaleTalk.push(text[i])
            }
        }
    }
}
console.log(whaleTalk)