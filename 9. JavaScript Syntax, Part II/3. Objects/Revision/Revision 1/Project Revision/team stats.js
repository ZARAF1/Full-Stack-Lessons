const team = {
    _players:[
        {firstName:'Shahid', lastName:'Afridi',age:22},
        {firstName:'Wasim', lastName:'Akram',age:23},
        {firstName:'Sharjeel', lastName:'Khan',age:24}
        ],
    _games:[
        {opponent: 'India', teamPoints: 10, opponentPoints: 4},
        {opponent: 'Australia', teamPoints: 10, opponentPoints: 6},
        {opponent: 'West Indies', teamPoints: 14 , opponentPoints: 0}

    ],
    get players (){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName,lastName,age){
        let player={
            firstName,
            lastName,
            age
        }
        this._players.push(player)
    },
    addGame(opponent,teamPoints,opponentPoints){
        let game={
            opponent,
            teamPoints,
            opponentPoints

        }
        this._games.push(game)
    }
}
team.addPlayer('Steph','Curry',28)
team.addPlayer('Lisa','Leslie',44)
team.addPlayer('Bugs','Bunny',76)
console.log(team._players)

team.addGame('Bangladesh',2,0);
team.addGame('England',2,0);
team.addGame('Sri Lanka',1,1)
console.log(team._games)