const halley ={
    _name:"Halley",
    _behavior:0,
    get name(){
        return this._name;
    },
    get behavior(){
        return this._behavior;
    },
    incrementBehavior(){
        this._behavior++;
    }

}

halley.incrementBehavior();

console.log(halley.name);