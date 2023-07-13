

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")




let player = {
  name: "Ahmad",
  chips: 300
}

let playerEl = document.getElementById("player-el")

 playerEl.textContent = player.name + ": $" + player.chips

//--------------------------------------------------------------------------------------- 1
// give random numbers 
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1

  // if 1 then return 11
  // if 11,12,13 then return 10
    if (randomNumber > 10) {
               return 10
    }
     else if (randomNumber === 1) {
               return 11
    } else {
      return randomNumber
    }
}


//--------------------------------------------------------------------------------------- 2

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]

  sum = firstCard + secondCard
  
    renderGame()
}


//--------------------------------------------------------------------------------------- 3
function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two

    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


//--------------------------------------------------------------------------------------- 4
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
  }
  
}
