const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', () => {
    let card1, card2, card3, deck, round;

    beforeEach(() => {
        card1 = new Card(6, "What is an example of a mutator method?",
        ["sort()", "map()", "join()"], "sort()");
        card2 = new Card(7, "Which array prototype is not an accessor method?",
        ["join()", "slice()", "splice()"], "splice()");
        card3 = new Card(8, "What do iterator methods take in as their first argument?",
        ["callback function", "current element", "an array"], "callback function");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should return the current card', () => {
        round.returnCurrentCard()

        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should have a turn counter that starts at 0', () => {
        expect(round.turns).to.equal(0);
    });

    it('should be able to increment turn counter with each turn', () => {
        round.takeTurn("sort()");
        round.takeTurn("slice()");
        round.takeTurn("current element")

        expect(round.turns).to.equal(3);
    });

    it('should start with no incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('should be able to store incorrect guesses', () => {
        round.takeTurn('map()');
        // round.takeTurn('slice()');
        // round.takeTurn('current element');

        expect(round.incorrectGuesses).to.deep.equal([6]);
    });

    it('should be able to give feedback for correct or incorrect guess', () => {

        expect(round.takeTurn('map()')).to.equal('incorrect!');
        expect(round.takeTurn('splice()')).to.equal('correct!');
        expect(round.takeTurn('callback function')).to.equal('correct!')
    });

    it('should be able to calculate the percentage of correct guesses', () => {
        round.takeTurn('map()');
        round.takeTurn('splice()');
        round.takeTurn('callback function');

        round.calculatePercentCorrect();

        expect(round.calculatePercentCorrect()).to.equal('66.67');
    });

    it('should be able to end the round', () => {
        round.takeTurn('map()');
        round.takeTurn('splice()');
        round.takeTurn('callback function');

        round.calculatePercentCorrect();

        round.endRound();

        expect(round.endRound()).to.equal(`** Round over! ** You answered 66.67% of the questions correctly!`)
    })
})