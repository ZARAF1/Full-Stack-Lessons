import React from 'react';
import ReactDOM from 'react-dom';

// coin toss function in JS
function coinToss(){
    return Math.random()<0.5? "heads":"tails";
}

// object containing pictures
const pics={
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
}

// declaring global variable that will contain the JSX element after condition evaluates to true or false

/*
// just commented to type again to revise

let image;
if(coinToss()==="heads"){
    image=(<img src={pics.kitty}
                alt="Kitty pic"/>)
}
else{
    image=(<img src={pics.doggy}
                alt="Doggy pic"/> )
}*/


let image;
if (coinToss()==="heads") {
    image = (
        <img src={pics.kitty}
             alt="Kitty in pic"/>
    )
}
    else {
        image = (
            <img src={pics.doggy}
                 alt="Dog in pic"/>
        )
    }
