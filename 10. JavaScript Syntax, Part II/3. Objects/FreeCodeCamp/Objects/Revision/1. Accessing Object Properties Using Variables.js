//Example 1

let dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog="Hunter";
console.log(dogs[myDog])


// Example 1: create a key name using a function then access an objects property using it
var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str; // s= prop + str=Name // propName
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);

