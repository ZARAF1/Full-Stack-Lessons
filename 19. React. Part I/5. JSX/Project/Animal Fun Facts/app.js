import { animals } from './animals';
import React from "react";
import ReactDOM from "react-dom";
// displays the title on top of the animals
const title="";

// used for determining whether the background will show or not
const showBackground=true;

// sets the background image using jsx in background variable
const background=<img src="/images/ocean.jpg" alt="ocean" className="background" />

function displayFact(e){
    let animalName=e.target.alt; // used to get the alt value stored in the image when its clicked
    let randomNumber=Math.floor(Math.random()*animals[animalName].facts.length)
    let funFact=animals[animalName].facts[randomNumber] // accessing a random fact from animals objects facts array
    document.getElementById("fact").innerHTML=funFact; // appends the random fact to p having id = "fact"

}

let images=[]; // stores the images from the animals object with the attributes and values denoted under in the for in loop

for (let animal in animals){
    images.push(
        (
            <img src={animals[animal].image} // accesses and sets the image url as the src
                 key={animal} // sets values for attribute
                 className='animal'
                 alt={animal}
                 aria-label={animal}
                 role='button'
                 onClick={displayFact}/> // calls the displayFact function on top when user clicks the image
        )
    )
}
const animalFacts=( // will be rendered using ReactDOM.render()
    // outer most element
    <div>
        {/*ternary to check if title exists or not then sets the title*/}
        <h1>{title ? title:"Click an animal for a fun fact!"}</h1>
        {/*ternary to check if background is set to true or false to display or not*/}
        {/*<p>{showBackground?background:""}</p>*/}
        {/* the top commented uses ternary to show background but under we are using && to check if the background displays or not*/}
        {showBackground && background}
        {/*gets the images array that was in turn fetched using for in loop above*/}
        <div className="animals">{images}</div>
        {/*random fact is added to innerHTML of p element*/}
        <p id="fact"></p>
    </div>



)

ReactDOM.render(animalFacts,document.getElementById("root"))


