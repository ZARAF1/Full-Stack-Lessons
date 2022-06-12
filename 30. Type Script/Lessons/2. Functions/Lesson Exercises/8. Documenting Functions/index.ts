/**
 * Logs a concatenated string of Salads
 * @param fruit1 - the first input string
 * @param fruit2 - the second inoput string
 * @returns nothing just logs to console
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
}

/**
 * Loops and logs status if i am not ready
 * @param status - the first  with a default value of a string with text 'not ready ...'
 * @param repeat - the second number based input with default set to 1
 * @returns nothing just logs to console
 */


function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}