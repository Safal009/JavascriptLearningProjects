
let score = 20
let number = Math.floor(Math.random()*20)+1
let highscore = 0;
console.log(number)




document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    //Input taken from user is always a string

    //If there is no value
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!'

        
    }

    //When player wins
    else if(guess === number){
        document.querySelector('.number').textContent = number
        document.querySelector('.message').textContent = 'Congratulations you guessed the correct number'
        if(highscore<score){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

    //When guess is high
    else if(guess>number){
        if(score>1){
            document.querySelector('.message').textContent = 'Too High!'
            score-- //Reducing the score
            document.querySelector('.score').textContent = score //Updating the score
        }else{
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0
        }

    }
    //When guess is low
    else if(guess<number){
        if(score>1){
            document.querySelector('.message').textContent = 'Too Low!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0
        }

    }



})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    number = Math.floor(Math.random()*20)+1
    document.querySelector('.guess').value = " "
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = 20
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
})
