// evaluation is from left to right with && having higher precedence than ||
console.log(true || (true && false));
console.log((true || true) && false);
console.log((false && true) || false);
console.log(true && true && false);
console.log(false || false || true);
console.log((false && false) || true);
console.log((true && true) || false);
