import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground=false;

const background=<img src="/images/ocean.jpg" className='background' alt="ocean"/>

let images = [];

for (let animal in animals){
    images.push(
        (
            <img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact}/>
        )
    )
}

function displayFact(e){
    let animalName=e.target.alt;
    let randomNumber=Math.floor(Math.random()*animals[animalName].facts.length);
    let funFact= animals[animalName].facts[randomNumber]
    document.getElementById("fact").innerHTML=funFact;

}

const animalFacts =(
    <div>
        <h1>{title?title:'Click an animal for a fun fact!'}</h1>
        {showBackground && background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
)


ReactDOM.render(animalFacts,document.getElementById('root'))