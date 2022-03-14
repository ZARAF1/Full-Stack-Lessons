class Dog{
    constructor(name,behavior) {
        this._name=name;
        this._behavior=behavior;
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}
const halley = new Dog("Halley",1)
console.log(halley.name)
console.log(halley.behavior)
halley.incrementBehavior()
console.log(halley.name)
console.log(halley.behavior)
console.log(Object.keys(halley))
console.log(halley)