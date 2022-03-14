import React from "react";
import ReactDOM from "react-dom"

const judgemental= Math.random()<0.5;

const favFoods=(
    <ul>
        <li>Pizza</li>
        <li>Sushi</li>
        {!judgemental && <li>Nacho</li>}
        <li>Chicken</li>
    </ul>
)
