let kelvin ={
    temp:[300,350,400],
    name:'kelvin'
}
/*
function randomNumber(obj,prop){
    let randomNum=Math.floor(Math.random()*obj[prop].length)
    return randomNum
}
console.log(randomNumber(kelvin,'temp'))
*/

let arr=[]

for (let prop in kelvin){
    arr.push(prop)

}
console.log(arr[0])