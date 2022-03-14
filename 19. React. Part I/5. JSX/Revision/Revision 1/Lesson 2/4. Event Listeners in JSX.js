// we can add event listeners to JSX just like HTML
//Programming in react constantly requires working with event listeners
import React from 'react';
import ReactDOM from 'react-dom';

function myFunction(){
    alert("Hello")
}

<h1 onclick={myFunction}></h1>