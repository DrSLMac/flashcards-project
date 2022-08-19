const Turn = require("./Turn");

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
        const turn = new Turn(guess, this.currentCard);
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        this.returnCurrentCard();
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    }
    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
}

module.exports = Round;