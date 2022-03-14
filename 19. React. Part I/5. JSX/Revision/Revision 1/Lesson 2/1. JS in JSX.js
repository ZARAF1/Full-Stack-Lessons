import React from "react";
import ReactDOM from "react-dom"
// adding does not work as it is included in the tags of a JSX element and hence will
// be read as jsx not as regular JS. JSX doesnt add numbers it reads them as
const calc = <p>2+3</p>
ReactDOM.render(calc,document.getElementById("app"))

// alternatively enclose the numbers in {} curly braces which mark the beginning and the end of a JS injection into JSX

