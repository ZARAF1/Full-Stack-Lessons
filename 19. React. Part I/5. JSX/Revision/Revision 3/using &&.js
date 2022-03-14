import React from "react";
import ReactDOM from "react-dom";

let judgemental=Math.random()<0.5;

const favFoods=(
    <h1>My Favorite Foods</h1>
    <ul>
        <li>Pizza</li>
        <li>Pasta</li>
        {judgemental && <li>Brocolli</li>}
        <li>{judgemental.toString()}</li>
    </ul>
)

console.log(judgemental); // just to check baby
ReactDOM.render(favFoods,document.getElementById('app'))