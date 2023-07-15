// Appreciation for loops can be seen when we need to print the array elements one by one
let cities=['lahore','canada','turku']
console.log(cities[0])
console.log(cities[1])
console.log(cities[2])

// FOR LOOP
for (let i=0;i<10;i++){
    console.log(i)
}

// for loop in reverse
for(let i=5;i>0;i--){
    console.log(i)
}

// loooping through arrays using a for loop
let favCities=['lahore','canada','turku']
for (let i=0;i<favCities.length;i++){
    console.log(favCities[i])
}


//nested loops. one use for this loop is to compare elements of two array
let arr1=[1,2,3];
let arr2=[3,4,5];
for (let i=0;i<arr1.length;i++){
    for (let j=0;j<arr2.length;j++){
        if (arr1[i] === arr2[j]) {
            console.log(arr2[j])
        }
    }
    }
// while loops
let animals=['bear','duck','turtle']
let currentAnimal;
while(currentAnimal!=='turtle') {
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log(currentAnimal)
}

// another example
let noOfTicketsSold=50;
let totalTickets=100;
while(noOfTicketsSold<=totalTickets){
    console.log('keep selling ' + (totalTickets- noOfTicketsSold));
    noOfTicketsSold++;

}


