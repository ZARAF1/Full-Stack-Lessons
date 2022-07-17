// constructor functions
function BellBoy (name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
    this.moveSuitCase=function (){
        // alert("Ready to move it now!"
        console.log("Am ready to move it now")
    }
    }

let newBellBoy1=new BellBoy("timmy",18,true,["arabic","urdu"])
console.log(newBellBoy1.name)
newBellBoy1.moveSuitCase()
