class Card {
    constructor (name,cost) {
        this.name = name;
        this.cost=cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            target.resilience = target.resilience - this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playResCard( target ) {
            if( target instanceof Unit ) {
                // implement card text here
                target.resilience = target.resilience + this.text;
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }

    playPowCard( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            target.power = target.power + this.text;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
        
}

const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);


const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algo", 2, 3, "Resilience", 3);
hardAlgo.playResCard(redNinja);

const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, 2, "Power", 2);
unhandledPromise.playResCard(blackNinja);

const pairProgramming = new Effect("Pair Programming", 3, 2, "Power", 2);
pairProgramming.playPowCard(redNinja);
pairProgramming.playPowCard(redNinja);

console.log("Ninja name: " + redNinja.name , "\n", "Cost: " + redNinja.cost, "\n", "Power: " + redNinja.power, "\n", "Resilience: " + redNinja.resilience, "\n");

console.log("Ninja name: " + blackNinja.name , "\n", "Cost: " + blackNinja.cost, "\n", "Power: " + blackNinja.power, "\n", "Resilience: " + blackNinja.resilience, "\n");