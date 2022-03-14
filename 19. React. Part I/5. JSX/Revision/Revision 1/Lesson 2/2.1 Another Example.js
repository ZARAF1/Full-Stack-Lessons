import React from 'react';
import ReactDOM from 'react-dom';

const betterName="Zulfiqar Ali Raffad";
const makeNameBetter=(<p>My Name is {betterName}</p>)

ReactDOM.render(makeNameBetter, document.getElementById('app'));