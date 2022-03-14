import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
    render(){
        let result;
        if (fiftyFifty===true){
            result = "Tonight I'm going out WOOO";
        }
        else{
            result="Tonight I'm going to bed WOOO";
        }
        return <h1>{result}</h1>;
    }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));