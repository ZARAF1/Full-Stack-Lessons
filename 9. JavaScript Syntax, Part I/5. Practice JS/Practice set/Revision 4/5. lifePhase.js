const lifePhase=(age)=> {
    if (age < 0 || age > 140) {
        return `Invalid Age`
    }
     else if (age < 4) {
    return 'baby'
}
     else if (age < 13) {
    return 'child'
}
     else if (age < 20) {
    return 'teen'
}
     else if (age < 65) {
    return 'adult'
}
     else {
    return 'senior citizen'
}
}
console.log(lifePhase(140))

