import React from 'react';
import ReactDOM from 'react-dom';

// so if you want to use conditions with JSX first method:
//example 1
let message;
if(purchase.complete){
    message=(<h4>Thank You</h4>)
}
else{
    message=(<h4>Try again</h4>)
}


// example 2
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
    message = (
        <h1>
            Hey, check out this alcoholic beverage!
        </h1>
    );
} else {
    message = (
        <h1>
            Hey, check out these earrings I got at Claire's!
        </h1>
    );
}

ReactDOM.render(
    message,
    document.getElementById('app')
);

