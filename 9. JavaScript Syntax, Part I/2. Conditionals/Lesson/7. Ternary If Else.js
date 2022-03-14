(4<5) ? console.log('true'):console.log('false')

// another example
let night=true;
night?console.log('turn lights on'):console.log('turn lights off')

// OR

// let night=true;
// night ? console.log('turn on lights'):console.log('switch lights off')

let username='';
username ? console.log(username): console.log('stranger')

// return is kept with condition 
function checkEqual(a, b) {
    return a===b? "Equal": "Not Equal";
}

checkEqual(1, 2);

