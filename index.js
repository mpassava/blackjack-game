let player = {
    firstName: 'Jefe',
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById('player-el');

playerEl.textContent = `${player.firstName}: $${player.chips}`;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    }
    return randomCard;
};

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.textContent = 'Cards: ';
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }

    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message = 'Do you want to hit?';
    } else if (sum === 21) {
        message = 'Blackjack!';
        hasBlackjack = true;
    } else {
        message = 'Busted';
        isAlive = false;
    }
    messageEl.textContent = message;
};

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};