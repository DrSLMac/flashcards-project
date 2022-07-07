const Turn = require('./Turn');

class Round {
    constructor(deck) {
       this.deck = deck.cards;
       this.currentCard = this.deck[0];
       this.turns = 0;
       this.incorrectGuesses = []; 
    }

    returnCurrentCard() {
        return this.currentCard = this.deck[this.turns];
    }

    takeTurn(guess) {
        let playerTurn = new Turn(guess, this.currentCard);
        if (!playerTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns += 1;
        this.returnCurrentCard();
        return playerTurn.giveFeedback();
    }

    calculatePercentCorrect() {
        let percent = (((this.turns - this.incorrectGuesses.length)/this.turns)*100).toFixed(2);
       return percent;
    }
    
    endRound() {
        return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}

module.exports = Round;