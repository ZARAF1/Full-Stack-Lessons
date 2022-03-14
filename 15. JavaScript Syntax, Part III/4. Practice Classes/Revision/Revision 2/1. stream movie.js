class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
    movieTime(){
        let dataAvailableOnNetwork= this.data;
        let totalDataUsed = this.users * 5;
        let remainingData = dataAvailableOnNetwork - totalDataUsed;
        if (remainingData>=10){
            return true;
        }
        else{
            return false;
        }

    }
}

const myUniversityNetwork = new Network(55,9)
console.log(myUniversityNetwork.movieTime())