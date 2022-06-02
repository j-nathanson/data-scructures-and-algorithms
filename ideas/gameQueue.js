const winnersLounge = []; //at max has 1 team
const currentGame = [];

class TeamNode {
    constructor(value) {
        this.names = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // see first team
    peek() {
        return this.first;
    }
    // add a team
    enqueue(value) {
        const newNode = new TeamNode(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }
    // remove first queue and add to match lobby
    dequeue() {
        // empty case
        if (this.length === 0) {
            return null;
        }
        //single item case
        if (this.length === 1) {
            this.last = null;
        }

        // Add to Current Game
        const firstTeam = this.first.names;
        this.first = this.first.next;

        currentGame.push(firstTeam);
        this.length--;
        return this;

    }
    //isEmpty;
}

const pushWinnersLounge = (team) => {

    // add to the winner's lounge
    winnersLounge.push(team);

    // remove from the current Game
    const index = currentGame.indexOf(team);
    currentGame.splice(index, 1);
}


const popWinnersLounge = () => {

    if (currentGame.length <= 1) {
        const team = winnersLounge.pop();
        currentGame.push(team);
    } else {
        //prompt user to remove losing team
        console.log('Remove losing team to start next match')
    }
}

const handleLost = (team, choice, queue) => {
    // remove from the current Game
    const index = currentGame.indexOf(team);
    currentGame.splice(index, 1);

    // add to end of the queue
    if (choice === 'yes') {
        queue.enqueue(team);
    }
}

const myQueue = new Queue();
// creat teams
myQueue.enqueue('Joey Aaron Izzy');
myQueue.enqueue('Ben Barack Abraham');
myQueue.enqueue('Pam Jim Dwight');
myQueue.enqueue('Luke Han Leia');
// add to cuurent game, if current game is empty or 1 add to current game

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);

// first teams to play
const firstTeam = currentGame[0];
const secondTeam = currentGame[1];
console.log('First Team', firstTeam)
console.log('Second Team', secondTeam)

console.log(winnersLounge)
console.log(currentGame)

// team loses wants to add name to the back of the queue
handleLost(firstTeam, 'yes', myQueue)
console.log(currentGame)
console.log(myQueue);

// set up next game
myQueue.dequeue();
console.log(currentGame)
const thirdTeam = currentGame[1];

// second win in a row
handleLost(thirdTeam, 'yes', myQueue);

// add to winner lounge
pushWinnersLounge(secondTeam)
console.log(currentGame)
console.log(winnersLounge)

// set up two new teams
myQueue.dequeue();
myQueue.dequeue();

console.log(currentGame)

const fourthTeam = currentGame[1];
//team loses
handleLost(fourthTeam, 'yes', myQueue);

// winners play
popWinnersLounge()
console.log(winnersLounge)
console.log(currentGame)
