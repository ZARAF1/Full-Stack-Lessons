const techList={
    data:{
        technologies:["css","html","react"]}
}

const printTechList=({data:{technologies}})=>{
    console.log(technologies)
}
printTechList(techList)