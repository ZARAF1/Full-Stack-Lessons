let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(arr){
    arr.forEach(element=>{
        if(typeof element!=="string"){
            console.log(`Type error: ${element} should be a string!`)
        }
    })
}
checkCustomersArray(customersArray)

function stringPush(val){
    if (typeof val === "string"){
        customersArray.push(val)
    }
}