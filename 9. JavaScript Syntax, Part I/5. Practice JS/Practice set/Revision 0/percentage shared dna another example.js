const relation = sharedDNA => {
    if (sharedDNA === 100) {
        return `identical twins`
    } else if (sharedDNA > 34) {
        return `parents or siblings`
    } else if (sharedDNA > 13) {
        return `grand parents or grand children`
    }

}

console.log(relation(34))