class Card {
    constructor(id, quest, ans, cor) {
        this.id = id;
        this.question = quest;
        this.answers = ans;
        this.correctAnswer = cor;
    }
}

module.exports = Card;