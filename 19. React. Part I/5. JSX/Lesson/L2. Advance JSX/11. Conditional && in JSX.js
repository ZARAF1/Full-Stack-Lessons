
import React from "react";
import ReactDOM from "react-dom"

const tasty=(
    <ul>
        <li>Applesauce</li>
        {!baby && <ul>pizza</ul>}
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
    </ul>
)


// another example

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