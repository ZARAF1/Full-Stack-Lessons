/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the
service received and a number representing the total cost.

    Return the tip, as a number, based on the following:
    ‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

*/

const tipCalc =(qualityOfService, totalCost)=>{
    if (qualityOfService==="bad"){
        return totalCost*0.05;
    }
    else if (qualityOfService==="ok"){
        return totalCost*0.15;
    }
    else if (qualityOfService==="good"){
        return totalCost*0.20;
    }
    else if (qualityOfService==="excellent"){
        return totalCost*0.30;
    }
    else {
        return totalCost*.18;
    }
}

console.log(tipCalc('good', 100))