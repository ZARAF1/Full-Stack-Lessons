const lookUpUsingSwitch = value =>{
    let result;

//using switch case for first example
    switch (value){
        case "A" : result="Alpha";
        break;
        case "B" : result="Beta";
        break;
        case "C" : result="Cheetah";
        break;
        case "D" : result="Delta";
        break;
        default: result = "fuck you"
            break;

    }
    return result;
}

console.log(lookUpUsingSwitch('G'))

// conversion to an object based lookup

const lookupStuff = {
    A:"Alpha",
    B:"Beta",
    C:"Cheetah",
    D:"Dheetah"
}
const objectBasedLookup =val=>{
return lookupStuff[val]
}

console.log(objectBasedLookup("A"))

