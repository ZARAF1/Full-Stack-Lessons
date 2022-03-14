// Example 1
const stringArr =["A","B","C"];
const listItems=stringArr.map(element=> <li>{string}</li>);
const myList=<ul>{listItems}</ul>
ReactDOM.render(myList, document.getElementById("app"))

// Example 2
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
    // expression goes here:

    <li key={'person_'+i}>{person}</li>
);
console.log(peopleLis.toString())
// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"))