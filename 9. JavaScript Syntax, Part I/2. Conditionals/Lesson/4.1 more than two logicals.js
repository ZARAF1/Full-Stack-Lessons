// evaluation is from left to right with && having higher precedence than ||
console.log(true || (true && false)); // true
console.log((true || true) && false); //false
console.log((false && true) || false); // false
console.log(true && true && false); //false
console.log(false || (false && true)); // false
console.log(true || (false && true)); // true
console.log((false && false) || true); // true
console.log((true && true) || false); // true
