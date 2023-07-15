let hobbies=['writing','reading','music','programming']

for (let hobby of hobbies){
    console.log(`I love ${hobby}.`)
}

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];

for (const bird of strangeBirds) {
    if (bird === 'Basan'){
        break;
    }
    console.log(bird);
}