function ticketPrice (){
    return 10;
}

function totalPrice(numberofTickets){
    return ticketPrice()*numberofTickets;
}

console.log(totalPrice(50))