class Person {
    constructor(name, age) {
        this._name=name;
        this._age=age;
        this._rating=1;
    }

    getName(){
        return this._name;
    }

    get name(){
        return this._name;
    }

    set setName(newName){
        this._name=newName;
    }

    incrementRating (){
        this._rating++;
    }
}

const ali = new Person("Ali",40);
console.log(ali.getName())
console.log(ali.name) // using getters

ali.setName="Talli"; // using setters

console.log(ali.name)