/*// for loops

for (let i=0; i<=10;i++){
                            console.log(i)
                        }*/


// another example loops in reverse
 /*for (let i=10;i>=0;i--){
     console.log(i)
 }
*/
// another example

/*
let i = 99;
 while(true){
     console.log(i);
     i--;
     if(i===0){
         break;
     }
 }*/
/*
let hungry=true;
for (let i=0;i<100;i++)
{
    console.log(i);
    if(i===89){
        console.log('breaks applied')
        break;
    }

}*/

// another example

let cities=['lahore','melbourne','dubai']
favoriteCities=[];
for(let i=0;i<cities.length;i++){
    if(cities[i]==='melbourne'){
        favoriteCities.push(cities[i]);
    }
    else{
        console.log('not so favorite city' + cities[i])
    }
}
console.log('My Favortie city: ' + favoriteCities)