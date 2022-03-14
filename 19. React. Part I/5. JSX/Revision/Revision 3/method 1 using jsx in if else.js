import React from "react";
import ReactDOM from "react-dom";

let message='';
if (user.age<18){
    message=<h1>Lets go Drink</h1>
}
else{
    message=<h1>Lets stay home play uno!</h1>
}

ReactDOM.render(message,document.getElementById('app'))