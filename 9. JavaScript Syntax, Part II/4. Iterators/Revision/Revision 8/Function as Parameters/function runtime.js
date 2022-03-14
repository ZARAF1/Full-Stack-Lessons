const calcFuncRuntime =(funcParam)=>{
    const t1=Date.now();
    funcParam();
    const t2=Date.now();
    return t2-t1;
}

const  findMyTime=()=>{
    for (let i=0;i<1000000;i++){
        if ((2+2)!=4){
            console.log("Something has gone wrong!")
        }
    }
}

console.log(calcFuncRuntime(findMyTime))