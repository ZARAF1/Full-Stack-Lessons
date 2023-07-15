class HospitalEmployee {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.remainingVacationDays = 30
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    /*
    // syntax 1
    takeVacationsDaysOff = function (value) {
          this.remainingVacationDays -= value
      }*/

    /* // syntax 2
    takeVacationDaysOff = (value) => {
         this.remainingVacationDays -= value
     }*/
    takeVacationDaysOff(val) {
        this.remainingVacationDays -= val;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, age, certifications) {
        super(name, age);
        this.certifications = certifications;
    }

    get certification() {
        return this.certifications;
    }

    set certification(val) {
        this.certification.push(val)
    }

    static generatePassword() {
        let randomNum = Math.floor(Math.random() * 10000)
        return randomNum;
    }
}

let nurseOlga = new Nurse("Olga", 30, ["bio", "chem"])
console.log(nurseOlga)
nurseOlga.certification = "Hibicus"
console.log(nurseOlga)
console.log(Nurse.generatePassword())
// console.log(HospitalEmployee.generatePassword()) // wont work because we have the static method declared on Nurse class