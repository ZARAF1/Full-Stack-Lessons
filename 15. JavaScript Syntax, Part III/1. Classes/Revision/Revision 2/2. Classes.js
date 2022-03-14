class Dog {
    constructor(name){
        this._name=name;
        this._behavior=0;
                    }
    get name (){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior (){
        this._behavior++;
    }
}

const bobo = new Dog("bobos")
console.log(bobo.name)
console.log(bobo.behavior)
bobo.incrementBehavior()
console.log(bobo.behavior)