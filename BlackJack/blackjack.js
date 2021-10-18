// // Pseudocode
// // Create two variables firstcard and secondcard
// //Set their values between random number 2-11
// //Create a variable sum and set it to the sum of the two cards
let cards = []
let sum = 0
let hasblackjack = false;
let isalive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")


function startGame(){
    isalive = true
    let firstcard = randomCard()
    let secondcard = randomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function randomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want a new card?"
    }else if(sum === 21){
        message = "Wohoo! You have got a Blackjack!"
        hasblackjack = true
    }else{
        message = "You're out of the game"
        isalive = false;
    }
    messageEl.textContent = message
}
function newCard(){
    if(isalive===true && hasblackjack===false){
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
