const kelvinArray = [293,303]


const convertKelvinToFahrenheit =(arr)=>{
    let celsiusArray=[];
    arr.forEach(element=>{
        celsiusArray.push(element - 273)
  })
celsiusArray.forEach(element=>{
    console.log(element * (9/5) + 32)
})
}
convertKelvinToFahrenheit(kelvinArray)