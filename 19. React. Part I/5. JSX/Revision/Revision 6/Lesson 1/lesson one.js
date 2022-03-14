// some ways to declare jsx and store them in variable or objects etc
// in variables //
const heading = <h1>This is heading</h1>
const navbar = <nav>i am a nav menu</nav>
const link = <a href="www.google.com">link</a>
const title = <h1 id="myTitle">Title of something</h1>

// in objects
const myTeam= {
    center:<li>ali</li>,
    forward:<li>paru</li>
}

// in arrays
const listItem = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>
]


// using js variable as value of a jsx attribute
const sidelength="200";
const image = <img src="./image/k.jpg" alt="some image" width={sidelength} height={sidelength} />

// nested jsx

const link = (
    <a href="">
                <h1>Some link</h1>
    </a>
)

// outer most
const paragraphs = (
    <div>
        <p>first para</p>
        <p>second para</p>
    </div>
)

//import statements to include react and react-dom
import React from "react";
import ReactDOM from "react-dom";


// render an element

ReactDOM.render(<h1>something big</h1>, document.getElementById('app'))
ReactDOM.render({paragraphs}, document.getElementById('app'))
