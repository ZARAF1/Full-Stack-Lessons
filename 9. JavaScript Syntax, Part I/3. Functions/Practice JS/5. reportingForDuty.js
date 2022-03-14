/*
Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
and returns a string in the following format: ‘rank lastName reporting for duty!’
* */
const reportingForDuty=function (rank,lName){
    return `${rank} ${lName} reporting for duty Sir!`
}

console.log(reportingForDuty("Major", "Ali"))