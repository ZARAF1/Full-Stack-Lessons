
let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

let checkCustomerArray=arr=>{
    arr.forEach(element=>{
        if(typeof element!=="string"){
            console.log(`${element} should be a string and not ${typeof element}`)
        }
    })
}
const newCustomerArray=[];
checkCustomerArray(customersArray)
customersArray.forEach(element=>{
    if (typeof element ==="string"){
         newCustomerArray.push(element)
    }
})
console.log(newCustomerArray)

