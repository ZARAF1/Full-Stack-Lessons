import React from "react";
import ReactDOM from "react-dom"

//using variable inside JSX
const name="Ali";
const fullNameGen=<h1>Welcome {name}</h1>
ReactDOM.render(fullNameGen,document.getElementById("app"))

/* another example*/
// direct reference of JSX in ReactDOM
ReactDOM.render(<h1>Welcome {name}</h1>,document.getElementById("app"))



