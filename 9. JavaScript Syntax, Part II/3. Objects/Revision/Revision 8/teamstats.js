const team = {
    _players:[],
    _games:[],

    get games(){
        return this._games;
    },

    set games(gamesIn){
        this['_games'].push(gamesIn)
    },

    get players(){
        return this._players
    },

    set players(playersIn){
        this['_players'].push(playersIn)
    },
    addPlayer(firstName,lastName,age){
        player={
            firstName,
            lastName,
            age
        };
        this.players.push(player)
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
