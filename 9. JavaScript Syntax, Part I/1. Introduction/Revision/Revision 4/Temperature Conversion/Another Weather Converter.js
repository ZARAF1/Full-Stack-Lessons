const kelvinArray = [293]


const convertKelvinToFahrenheit=(arr)=>{
    arr.forEach(element=>{
        console.log((element - 273) *(9/5) + 32)
    })
}
convertKelvinToFahrenheit(kelvinArray)