const celToFah = (celsius) =>{
    return (celsius * 9/5 )+ 32;
}
module.exports.celToFah = celToFah;
module.exports.fahToCel = (fahrenheit)=>{
    return (fahrenheit -32) * 5/9;
}