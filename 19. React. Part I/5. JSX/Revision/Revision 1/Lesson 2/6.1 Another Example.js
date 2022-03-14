import React from 'react';
import ReactDOM from 'react-dom';

const coinToss=()=>{
   return Math.random()<0.5?"heads":"tails"
}

const pics={
   kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
   doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
}

const image=(
    <img src={pics[coinToss()==="heads"?"kitty":"doggy"]} />
)

ReactDOM.render(image, document.getElementById("app"));
