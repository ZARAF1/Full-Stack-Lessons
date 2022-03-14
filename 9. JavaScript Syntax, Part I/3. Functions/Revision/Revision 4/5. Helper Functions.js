function noOfComputers (rows,columns){
    return rows*columns;
}

function totalCostOfComputers(rows,columns){
    let totalCost=noOfComputers(rows,columns)*150
    return totalCost;
}

console.log(totalCostOfComputers(6,10))