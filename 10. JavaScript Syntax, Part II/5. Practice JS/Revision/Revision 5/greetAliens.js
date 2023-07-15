const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

// using for loop
const greetAliens = arr => {
    for (let i = 0; i < aliens.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}
greetAliens(aliens)


// using forEach();

aliens.forEach(element => {
    console.log(`he takes your cherry ${element}`)
})