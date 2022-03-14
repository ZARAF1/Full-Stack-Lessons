class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
}

const p1=new Player('Player One', 5)
const p2=new Player("Player Two", 6)


const balloonAttack = (firstPlayer,secondPlayer)=>{
    let numberOfBalloonsLeftFirstPlayer=firstPlayer.balloonCount - firstPlayer.hitsPerMinute * 10;
    firstPlayer.balloonCount=numberOfBalloonsLeftFirstPlayer;
    let numberOfBalloonsLeftSecondPlayer=secondPlayer.balloonCount - secondPlayer.hitsPerMinute * 10;
    secondPlayer.balloonCount = numberOfBalloonsLeftSecondPlayer;
    if (numberOfBalloonsLeftFirstPlayer>numberOfBalloonsLeftSecondPlayer){
        return 'Player One Wins'
    }
    else if(numberOfBalloonsLeftFirstPlayer===numberOfBalloonsLeftSecondPlayer) {
        return "Game is a tie";
    }
    else {
    return 'Player Two Wins'
    }

}

console.log(balloonAttack(p1,p2))
p1.status()
p2.status()
