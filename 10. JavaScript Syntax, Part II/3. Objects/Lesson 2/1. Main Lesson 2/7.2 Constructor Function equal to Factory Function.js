// constructor functions
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitCase = function () {
    // alert("Ready to move it now!"
    console.log(
      `Am ready to ${
        this.hasWorkPermit === true ? 'work' : 'look for job'
      } now because my name is ${this.name} and i have ${
        this.hasWorkPermit === true ? 'a work permit' : 'no work permit'
      }`
    );
  };
}

let newBellBoy1 = new BellBoy('timmy', 18, false, ['arabic', 'urdu']);
newBellBoy1.moveSuitCase();
console.log(newBellBoy1);
newBellBoy1.moveSuitCase();
