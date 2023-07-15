const isTheDinnerVegan = (arr) => {
    return arr.some(element => {
        if (element['source'] === 'plant') {
            return true;
        } else {
            return false;
        }
    })
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {
    name: 'ketchup',
    source: 'plant'
}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source: 'unknown'}];

console.log(isTheDinnerVegan(dinner))