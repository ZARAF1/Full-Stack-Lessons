const stringOfValues="0123456789abcdef"
const makeColor=()=>{
    let color ="";
    for (let i=0;i<6;i++){
        let randomNumber= Math.floor(Math.random()*stringOfValues.length)
        let randomCharacter = stringOfValues[randomNumber];
        color+=randomCharacter
    }
    return color;
}
let colorElement=document.getElementById("body");
colorElement.style.color=makeColor();