import React from "react";
import ReactDOM from "react-dom"

function makeDog(e){
    e.target.setAttribute('src','images/dog.jpg');
    e.target.setAttribute('alt','Doggie')
}

const image=(
    <img src="images/cat.jog" alt="Cattie" onClick={makeDog}/>
)

ReactDOM.render(image,document.getElementById('app'))
