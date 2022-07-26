
const makeArray =<T>(val:T):[T]=>{
    return [val]
}
const v1=makeArray(1);
const v2 =makeArray("A");

const makeArrayTwoParam=<X,Y>(x:X,y:Y):[X,Y]=>{
    return [x,y];
}
const v3=makeArrayTwoParam(1,2)
const v4=makeArrayTwoParam("a","b");
const v5=makeArrayTwoParam("a",6)


const lastItem = <T>(arr:T[])=>{
    return arr[arr.length-1];
}

const v6=lastItem([1,2,3]);
const v7=lastItem(["a","b"]);