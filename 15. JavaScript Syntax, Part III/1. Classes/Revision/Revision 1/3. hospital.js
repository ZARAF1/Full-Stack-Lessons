class HospitalEmployee {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        typeof newName==="string"?this._name=newName:console.log("kindly enter a fucking name as a string")
    }
    get age(){
        return this._age;
    }
    set age(newAge){
        typeof newAge==="number"?this._age=newAge:console.log("kindly enter an age as a number")
    }
}

class Nurse extends HospitalEmployee {
    constructor(name,age,department) {
        super(name,age);
        this._certifications=[];
        this._department=department;
    }
    addCertifications(newCertification){
        this._certifications.push(newCertification)
    }
    get department(){
        return this._department;
    }
    get certifications(){
        return this._certifications
    }

}
const NurseHolly =new Nurse("Holly Molly",27,"Orthopedics")

NurseHolly.addCertifications("Babok");

NurseHolly.addCertifications("Mabok");

console.log(NurseHolly.certifications)


