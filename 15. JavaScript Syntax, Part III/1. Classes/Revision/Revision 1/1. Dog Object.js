let halley = {
    _name:"Halley",
    _behavior:0,
    get name(){
        return this._name;
    },
    set name(newName){
        typeof newName === "string" ? this._name = newName : console.log("provide correct name");
    },
    get behavior(){
        return this._behavior
    },
    set behavior(num){
        typeof num === "number"?this._behavior = num : console.log("provide a number")
    },
    incrementBehavior(){
      this._behavior++;
    }
}

halley.behavior=10;
console.log(halley)
halley.incrementBehavior();
console.log(halley)