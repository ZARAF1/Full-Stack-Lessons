const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



const createField = num => {
    let fieldArray = [];
    if (num >= 30 && num <= 50) {
        for (let i = 0; i < num; i++) {
            if (i < num * 0.8) {
                if (i === num * 0.5) {
                    fieldArray.push(hat)
                } else {
                    fieldArray.push(fieldCharacter);
                }
            } else if (i > num * 0.8 && i < num) {
                fieldArray.push(hole);
            }
        }
    } else if (num < 30 || num > 50) {
        return "Please enter a value between 30-50";
    }
    let newFieldArray = []
    for (let i = 0; i < fieldArray.length; i++) {
        let randomNumber = Math.floor(Math.random() * fieldArray.length)
        if (i)
            newFieldArray.push(fieldArray[randomNumber])
    }
    return newFieldArray;
}


let scrambledArray=createField(50);
let finalFieldArray=[];
for (let i=0;i<scrambledArray.length;i++){
    if (i===0){
        finalFieldArray.push(pathCharacter)
    }
    else {
        finalFieldArray.push(scrambledArray[i])
    }
}

// console.log(finalFieldArray)
// console.table(finalFieldArray)

class Field {
    constructor(field){
        this.field=field;
    }
    print(){
       return this.field.join("")
    }
}

const playField=new Field(finalFieldArray)
let stringResult=playField.print();
let finalStringResult;
/*for (let i=0;i<stringResult.length;i++){
    if (i%5===0){
        finalStringResult.push('/n')
    }
    else {
        finalStringResult.push(stringResult[i])
    }
}*/
console.log(stringResult)




