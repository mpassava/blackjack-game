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

const checkForAce = () => {
    if (sum <= 21) return;
    
    const aceIdx = cards.indexOf(11);
    if (aceIdx !== -1) {
        cards[aceIdx] = 1;
        sum = sum - 10;
    }
};

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    checkForAce();
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
        checkForAce();
        renderGame();
    }
};
