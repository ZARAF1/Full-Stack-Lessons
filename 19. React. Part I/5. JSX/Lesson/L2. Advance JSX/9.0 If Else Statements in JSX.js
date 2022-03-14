import React from "react";
import ReactDOM from "reach-dom";

let message;

if(order.complete){
    message=<h1>The order is complete</h1>
}
else{
    message=<h1>Order not complete</h1>
}



ReactDOM.render(
    message,
    document.getElementById('app')
);