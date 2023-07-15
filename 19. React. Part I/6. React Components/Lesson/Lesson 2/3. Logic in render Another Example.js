import React from 'react';
import ReactDOM from 'react-dom';

class Random extends React.Component {
    render() {
        // First, some dom functions that must happen
        // before rendering:
        const n = Math.floor(Math.random() * 10 + 1);
        // Next, a return statement
        // using that dom functions:
        return <h1>The number is {n}!</h1>;
    }
}

ReactDOM.render(<Random/>, document.getElementById('app'));

