// POST Increment: The operator returns the initial variable value first  then only value of variable will incremented by 1.
num = 1;
console.log(num++); // prints the value of num does not increment
console.log({ num }); // now the value of

// PRE Increment: It will increment the value of the variable even before assigning it to the variable.
console.log('pre-increment');
numb = 1;
console.log(++numb); // increments before printing to the console
console.log(typeof numb);

//post increment example we allow the value of variable to increase before we print it to console that
// is why 3 becomes 4
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log('Dollar Gained ' + gainedDollar);
console.log(lostDollar);

// pre increment example
++gainedDollar;
console.log('Dollar Gained ' + gainedDollar);
