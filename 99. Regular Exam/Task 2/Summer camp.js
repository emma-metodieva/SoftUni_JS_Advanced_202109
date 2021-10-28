class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp[condition] === undefined) {
            throw new Error('Unsuccessful registration at the camp.')
        } else if (this.isParticipantPresent(name)) {
            return `The ${name} is already registered at the camp.`
        } else if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        } else {
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0
            });
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        if (this.isParticipantPresent(name)) {
            this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name);
            return `The ${name} removed successfully.`
        }
        throw new Error(`The ${name} is not registered in the camp.`)
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.isParticipantPresent(participant1) || (participant2 !== undefined && !this.isParticipantPresent(participant2))) {
            throw new Error(`Invalid entered name/s.`)
        }

        if (typeOfGame === 'WaterBalloonFights') {
            let player1 = this.listOfParticipants.filter(p => p.name === participant1)[0];
            let player2 = this.listOfParticipants.filter(p => p.name === participant2)[0];

            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player1.power < player2.power) {
                player2.wins += 1 ;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame === 'Battleship') {
            let player = this.listOfParticipants.filter(p => p.name === participant1)[0];
            player.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }

    }

    toString() {
        let output = [];
        output.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort(function(a, b) {
            return b.wins - a.wins;
        });

        for (let p of this.listOfParticipants) {
            output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        }

        return output.join('\n')
    }

    isParticipantPresent(name) {
        return this.listOfParticipants.some(p => p.name === name)
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
// console.log(summerCamp.toString());
