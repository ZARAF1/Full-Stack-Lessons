const team ={
    _players:[{firstName:'Shahid', lastName:'Afridi', age:40},{firstName:'Waseem',lastName:'Akram',age:50},{firstName:'Muhammad', lastName:'Amir',age:32}],
    _games:[{ opponent: 'India', teamPoints: 2, opponentPoints: 0},{opponent: 'Aus', teamPoints: 0, opponentPoints: 2},{opponent: 'NZ', teamPoints: 1, opponentPoints: 1}],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName,lastName,age){
        const player={
        firstName,
        lastName,
        age
        }
        this._players.push(player)

    },
    addGame(opponent,teamPoints,opponentPoints){
        game={
            opponent,
            teamPoints,
            opponentPoints
        };
        this.games.push(game)
    }
}
team.addPlayer('Steph','Curry',28)
team.addPlayer('Lisa','Leslie', 44)
team.addPlayer('Bugs','Bunny',76)

console.log(team._players)

team.addGame('Bangladesh',2,0);
team.addGame('England',2,0);
team.addGame('Sri Lanka',1,1)
console.log(team._games)