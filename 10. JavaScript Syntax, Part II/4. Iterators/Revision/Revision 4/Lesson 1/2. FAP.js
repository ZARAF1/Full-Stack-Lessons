const calcFuncRuntime = (funcParam) =>{
    const t1=Date.now()
    funcParam();
    const t2=Date.now();
    console.log(t2-t1)
}

const addOneToOne = ()=>1+1;

calcFuncRuntime(addOneToOne)

calcFuncRuntime(function (){
    for (let i=0;i<5;i++){
        console.log(i)
    }
})