import React from "react";
import ReactDOM from "react-dom";

// normal js
function toss(){
    return Math.random()<0.5?"heads":"tails";
}


const pics={
    dog:'images/dog.jog',
    cat:'images/cat.jpg'
}

let image;
if(toss()==="heads"){
    image=<img src={pics.dog} alt="dog"/>
}
else{
    image=<img src={pics.cat} alt="cat"/>
}

ReactDOM.render(image,document.getElementById('app'))