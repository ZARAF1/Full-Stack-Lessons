import React from 'react';
import ReactDOM from 'react-dom';

class MyClass extends React.Component{
    myFunc(){
        alert ('stop hovering over me you bimbo!')
    }

    render(){
        return <div onHover={this.myFunc}></div>
    }
}