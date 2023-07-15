let tempInCel = process.argv[2];
const celToFah = cel => {
    return cel * (9 / 5) + 32;
}

const tempInFah = celToFah(tempInCel);
console.log(tempInFah);

