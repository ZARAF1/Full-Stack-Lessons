let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

const justCoolStuff =(array1,array2)=>{
    let newArray=array1.filter(element=>{
        return array2.includes(element)
    })
    return newArray;
}
console.log(justCoolStuff(arr1,arr2))