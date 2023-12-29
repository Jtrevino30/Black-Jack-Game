
let player = {
    Name: "Jesse's credit",
    Chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = player.Name + ": $" + player.Chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    }


function startGame() {
    let firsCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firsCard, secondCard]
    sum = firsCard + secondCard
    isAlive = true
     renderGame()
}

function renderGame() {
cardsEl.textContent = "Cards: " 
for(let i = 0; i < cards.length; i ++) {
    cardsEl.textContent += cards[i] + "  ";
    console.log(cardsEl)
}
sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want another card?"
} else if (sum === 21) {
    message = "You Win!";
    hasBlackJack = true;
    player.Chips += 20;
    playerEl.textContent = player.Name + ": $" + player.Chips;
} else {
    message = "Looooooooooooooooossssssssssseeeeeeeeerrrrr"
    isAlive = false 
    player.Chips -= 10;
    playerEl.textContent = player.Name + ": $" + player.Chips;
}
    messageEl.textContent = message;
}

// The new card function continues to let you draw cards, which shouldn't happen, the game should end once you reach blackjack or lose

function newCards() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        console.log(cards)
         sum += card
         renderGame()    
        }
}

