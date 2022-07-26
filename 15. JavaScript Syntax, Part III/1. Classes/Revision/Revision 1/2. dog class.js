// the class doesnt replicate and is different from the previous dog object created in 1.Dog Object

class Animal {
   constructor(name,gender,behavior=0) {
        this._name=name;
        this._gender=gender;
        this._behavior=behavior;
    }
    get name(){
        return this._name;
    }
    setName(newName) {
        typeof newName === "string" ? this._name = newName : console.log("provide correct name");
    }
    get gender(){
        return this._gender;
    }
    set gender(newGender){
        this._gender=newGender;
    }
    get behavior(){
        return this._behavior;
    }
    set behavior(num){
        typeof num === "number"?this._behavior = num : console.log("provide a number")
    }
    incrementBehavior(){
        this._behavior++
    }
    static generateName (){
        let nameArray=["Beeps","Peeps","Heaps","Jeeps","Creeps","Sweeps","Deeps"];
        let randomNumber = Math.floor(Math.random()*nameArray.length);
        console.log(nameArray[randomNumber])
    }
}

class Cat extends Animal {
    constructor(name,gender,behavior,usesLitter=true, eatsCatnip=true) {
        super(name,gender,behavior);
        this._usesLitter=usesLitter;
        this._eatsCatnip=eatsCatnip;
    }
    get usesLitter(){
        return this._usesLitter;
    }
    set usesLitter(newValue){
        if (typeof newValue === "boolean"){
            this._usesLitter = newValue;
        }
        else {
            console.log("Enter a boolean you BOZO!")
        }
    }
    get eatsCatnip(){
        return this._eatsCatnip;
    }
    set eatsCatnip(newValue){
        if (typeof newValue === "boolean"){
            this._eatsCatnip = newValue;
        }
        else {
            console.log("Enter a boolean you BOZO!")
        }
    }


}
Animal.generateName()

const kittyKatter = new Cat ('katter',"male")
