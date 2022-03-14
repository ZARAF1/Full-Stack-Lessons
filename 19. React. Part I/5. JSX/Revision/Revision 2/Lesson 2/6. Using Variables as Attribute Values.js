import React from "react";
import ReactDOM from "react-dom";

const sideLength="200px";

const myImage=(
    <img src="images/my.jpg"
         alt="My Image"
         width={sideLength}
         height={sideLength}
    />
)

/*Another Example*/
import React from "react";
import ReactDOM from "react-dom";

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

const gooseImage=<img src={goose} alt="Image of a goose"/>

ReactDOM.render(gooseImage,document.getElementById('app'))

/*Another Example*/
import React from "react";
import ReactDOM from "react-dom";

const pics={
    owl:"images/owl.png",
    dog:"images/dog.png",
    cat:"images/cat.png"
}


const owlImage=(
    <img src={pics.owl}
         alt={"Owl Image"}
    />
)

const dogImage=(
    <img src={pics.dog}
         alt={"Dog Image"}
/>
)

const catImage=(
    <img src={pics.cat}
         alt={"Cat Image"}
    />
)

