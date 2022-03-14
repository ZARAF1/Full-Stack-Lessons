import React from "react";
/*import ReactDOM from "react-dom";*/

// JS Section
const animals = {
                dolphin: {
                    image: '/images/dolphin.jpg',
                    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
                         },
                lobster: {
                    image: '/images/lobster.jpg',
                    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
                         },
                starfish:{
                    image: '/images/starfish.jpg',
                    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
                         }
                };

//REACT Section
let title;
let background = <img src="" alt="" width="" height="" />
let images=[];
let showBackground = false;

const displayFact =(e)=>{
    let animalName = e.target.alt;
    let randomNumber= Math.floor(Math.random()*animals[animalName].facts.length);
    document.getElementById("fact").innerHTML=animals[animalName].facts[randomNumber]

}

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
// Rendering Element
let animalFacts = (
    <div>
        <h1>{title ? title : "Click on an animal to display fact"}</h1>
        {showBackground && background}
        <div className="animals">{images}</div>
        <p id="facts"></p>
    </div>
        )