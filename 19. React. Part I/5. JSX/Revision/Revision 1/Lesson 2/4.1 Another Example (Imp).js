/*HTML*/
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/styles.css">
    <title>Learn ReactJS</title>
</head>

<body>
<main id="app"></main>
<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
<script src="/app.compiled.js"></script>
</body>

</html>
/*React JSX*/
import React from "react";
import ReactDOM from "react-dom"

function makeDog(e){
    e.target.setAttribute("src","https://content.codecademy.com/courses/React/react_photo-puppy.jpeg")
    e.target.setAttribute("alt","Dog")
}
const kitty=(<img src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
                 alt="kitty" onclick={makeDog}/>)

ReactDOM.render(kitty,document.getElementById("app"))