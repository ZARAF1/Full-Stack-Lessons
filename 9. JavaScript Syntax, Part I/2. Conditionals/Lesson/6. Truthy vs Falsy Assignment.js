/*
let username='';
let defaultName;
if (username) {
    defaultName = username;
    console.log('Welcome ' + defaultName)
} else {
    defaultName = 'Stranger';
    console.log('Welcome ' + defaultName)
}

*/
// Short circuit evaluation of above example
let username = ''; // as this value is falsy default name underneath will have Stranger as its value as JS only processes the first value if its true in short cut evaluation.
let defaultName = username || 'Stranger';
console.log(defaultName);

// another example
let sale = 'time to buy';
let decision = sale || 'time to wait';
console.log(decision);

/*
// above example elaborated
let sale = true;
if (sale===true){
decision='time to buy';
console.log(decision);
}
else
{
decision='time to wait';
console.log(decision)
}

*/
