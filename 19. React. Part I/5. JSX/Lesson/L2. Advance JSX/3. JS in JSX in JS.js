import React from 'react';
import ReactDOM from 'react-dom';

/*
ReactDOM.render(
    <h1>2 + 3</h1>,
    document.getElementById('app')
);
*/

// above code doesnt work
// wrap code i.e., <h1>2 + 3</h1> in curly braces like this <h1>{2 + 3}</h1> as jsx reads anything between the tags as text

ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('app')
)