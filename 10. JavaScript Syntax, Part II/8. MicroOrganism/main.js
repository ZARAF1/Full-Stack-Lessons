// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
/*
1.
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the
parameters provided.

You’ll also add more methods to this returned object in the later steps.
2.

Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the
current base to a different base. Then .mutate() will return the object’s dna.
For example, if the randomly selected base is the 1st base and it is 'A',
the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

3.

*/
const pAequorFactory=(num,funcParam)=>{
  return {
    specimenNum:num,
    dna:funcParam(),
    mutate(){
      let dnaBase=this.dna[Math.floor(Math.random()*this.dna.length)];
      let anotherRandomBase=returnRandBase();
      console.log(dnaBase)
      console.log(anotherRandomBase)
         if(dnaBase!==anotherRandomBase){
        dnaBase=anotherRandomBase;
      }
    },
    compareDNA(obj){
      let count=0;
      for(let i=0;i<this.dna.length;i++){
          if(this.dna[i]===obj.dna[i]){
            count=count+1
                      }
      }
      console.log(`Specimen #${this.specimenNum} has ${count/this.dna.length * 100}% DNA bases in common with #${obj.specimenNum}.`)
    },
    willLikelySurvive(){
      let countC=0;
      let countG=0;
      for (let i=0;i<this.dna.length;i++){
        if (this.dna[i]==="C"){
          countC=countC+1;
        }
        else if(this.dna[i]==="G"){
          countG=countG+1;
        }

      }

      if (countC/this.dna.length*100>=30 || countG/this.dna.length*100>=30){
        return true;
      }
      else{
        return false;
      }

    }
  }
}

const creatInstanceArray=()=> {
  let instancesArray = [];
  for (let i = 0; i < 30; i++) {
    instancesArray.push(pAequorFactory(i, mockUpStrand))
  }
  return instancesArray;
}

let instanceArray=creatInstanceArray();
console.log(instanceArray[0])


