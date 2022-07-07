const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let card1, card2, card3, deck, round, turn, game;
    
    beforeEach(() => {
        card1 = new Card(11, "Which iteration method returns a new array with all elements that match a given condition?",
        ["filter()", "find()", "map()"], "filter()");
        card2 = new Card(12, "Which iteration method returns an array of the same length as the original array?",
        ["map()", "forEach()", "reduce()"], "map()");
        card3 = new Card(13, "The callback function for map() returns a modified version of the current element.",
        ["true", "false"], "true");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        game = new Game();
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', () => {
        game.start();
        expect(game).to.be.an.instanceof(Game);
    });

    it('should keep track of the current round', () => {
       expect(game.currentRound).to.equal(0);
    })

    it.skip('should be able to create cards', () => {

    });

    it.skip('should be able to put cards in a deck', () => {

    });

    it.skip('should create a new Round using the Deck', () => {

    });


})