const add=(...numbersList /*:number[]*/ )=>{ // should be used in TS :number[] other wise it will think we can pass any arguments
  // let reducedSum =numbersList.reduce((acc,cv)=>{
  //     return acc+cv;
  // })
  //   return reducedSum

/*  or  */

//     let reducedSum=0;
//     for (let i=0;i<numbersList.length;i++){
//         reducedSum+=numbersList[i]
//     }
//     return reducedSum


    /*  or  */
//     let summedUp=0
// numbersList.forEach(element=>{
//     summedUp+=element
// })
// return summedUp;



}
console.log(add(1,2,3,4,5))