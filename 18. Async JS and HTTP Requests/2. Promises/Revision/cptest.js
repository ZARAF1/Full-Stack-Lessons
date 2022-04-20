const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
}

/*
// Another Implementation
const returnPromiseFunction = () => {
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           inventory['sunglasses']>0 ? resolve('order processed'):reject('order rejected')
       },2000)
   })
  };
*/
const executorFunction=(resolve,reject)=>{
    setTimeout( ()=>{ return inventory['sunglasses']>0 ? resolve('order processed'):reject('order rejected')},2000)
}

const returnPromiseFunction=()=> {
return new Promise(executorFunction)
}

console.log(returnPromiseFunction())