import React from "react";
import ReactDOM from "react-dom";

const fName ="Ali";
const lName="Raffad";

const myName=<p>{fName}+" "+{lName}</p>
ReactDOM.render(myName,document.getElementById("app"));