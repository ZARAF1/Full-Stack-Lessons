/*

const lifePhase=(age)=>{
    switch(age){
        case (age>=0 && age<=3): return 'baby';
        break;
        case (age<=12): return 'child';
        break;
        case (age<=19): return 'teen';
        break;
        case (age<=64): return 'adult';
        break;
        case (age<=140):return 'senior citizen'
        break;
        default: return 'This is not a valid age'
        break;
    };
    }
console.log(lifePhase(3))
*/

const lifePhase =(age)=>{
    if (age===0 || age<=3){return 'baby'};

    if (age<=12){ return 'child'};

    if (age<=19){ return 'teen'};

    if (age<=64) {return 'adult'};

    if (age<=140){return 'senior citizen'};

    if (age<0 || age>140) {return 'This is not a valid age'};

}
console.log(lifePhase(30))
