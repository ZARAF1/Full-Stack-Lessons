function monitorCount(rows,columns){
    return rows*columns;
}
function costOfMonitors(rows,columns){
    return monitorCount(rows,columns)*200
}

let totalCost=costOfMonitors(5,5)
console.log(totalCost)