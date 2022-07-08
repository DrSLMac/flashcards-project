const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {                      
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const getCard = prototypeQuestions.map((card) => {
      const eachCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
      return eachCard;
    });

    const deck = new Deck(getCard);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);

  }
}

module.exports = Game;