import React from "react";
import ReactDOM from "react-dom";

function toss(){
    return Math.random()<0.5?"heads":"tails"
}

let pics={
    dog:"images/dog.jpg",
    cat:"images/cat.jpg"
}

const image= (<img src={pics[toss()==="heads"?"dog":"cat"]} alt="my pet"/>)
ReactDOM.render(image,document.getElementById('app'))