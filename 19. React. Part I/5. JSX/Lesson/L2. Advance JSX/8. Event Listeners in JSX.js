import React from "react"
import ReactDOM from "react-dom"

function myFunc(e){
    e.target.setAttribute("src","https://content.codecademy.com/courses/React/react_photo-puppy.jpeg")
    e.target.setAttribute("alt","doggie")
}

const kittyImg=(
    <img src="src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
         alt="kitty"
         onClick={myFunc} "/>
);
ReactDOM.render(kittyImg,document.getElementById("app"))
