let day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let currentDay='monday';
while (currentDay!=='friday'){
    console.log(currentDay)
    currentDay=day[Math.floor(Math.random()*day.length)]

}