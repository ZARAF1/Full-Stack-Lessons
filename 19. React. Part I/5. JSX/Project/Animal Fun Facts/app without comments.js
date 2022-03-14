import { animals } from './animals';
import React from "react";
import ReactDOM from "react-dom";

const title="";

const showBackground=true;

const background=<img src="/images/ocean.jpg" alt="ocean" className="background" />

function displayFact(e){
    let animalName=e.target.alt;
    let randomNumber=Math.floor(Math.random()*animals[animalName].facts.length)
    let funFact=animals[animalName].facts[randomNumber]
    document.getElementById("fact").innerHTML=funFact;

}

let images=[];

for (let animal in animals){
    images.push(
        (
            <img src={animals[animal].image}
                 key={animal}
                 className='animal'
                 alt={animal}
                 aria-label={animal}
                 role='button'
                 onClick={displayFact}/>
        )
    )
}
const animalFacts=(
    <div>
        <h1>{title ? title:"Click an animal for a fun fact!"}</h1>
        {showBackground && background}
        <div className="animals">{images}</div>
        <p id="fact"></p>
    </div>



)

ReactDOM.render(animalFacts,document.getElementById("root"))


