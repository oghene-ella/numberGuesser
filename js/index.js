//game values
let min = 0,
    max = 20,
    // winningNumber = getRandomNumber(min, max);
    guessesLeft = 5;
    winningNumber = 8

// ui elements
const  game = document.querySelector('.content'),
       minNum = document.querySelector('.min'),
       maxNum = document.querySelector('.max'),
       guessBtn = document.querySelector('.btn'),
       guessInput = document.querySelector('.input');
       message = document.querySelector('.message');

// assign min and max number
minNum.textContent = min;
maxNum.textContent = max;


// play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){ 
        window.location.reload();
    }
});
// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)

    // validate
    if(isNaN(guess) || guess < min || guess > max){
        tryAgain(false,`please enter a number between ${min} and ${max}` )
    }

    //check if its the correct number
    if(guess === winningNumber){
    // game over --- won
    gameOver(true, `${winningNumber} is the correct answer! YOU WIN!🎊🎉`)
    }

    else{
            // wrong answer
        guessesLeft -= 1
        if(guessesLeft === 0){
            // game over --- lost;
            gameOver(false, `Game Over! YOU LOST. the correct number was ${winningNumber}`)
            
        }
        else{
            if(isNaN(guess) || guess < min || guess > max){
                tryAgain(false,`please enter a number between ${min} and ${max}` )
            }
            else{
            ///game continues ---  answer wrong
            tryAgain(false, `Try Again😪\nYou have ${guessesLeft} guesses left!`)
            }
        }
    }
});

// get winning number
function getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min)
}

// game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessBtn.disabled = true
    guessInput.disabled = true;
    guessInput.style.borderColor = color
    message.style.color = color;
    setMessage(msg);
    winningMessage(msg)

    playAgain()
}
// set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
// winning message
function winningMessage(msg, color){
    message.style.color = color;
    message.textContent = msg
}
// try again
function tryAgain(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.style.borderColor = color
    message.style.color = color;
    setMessage(msg);
    winningMessage(msg)
}
// //   play again
function playAgain(){
    guessBtn.value = 'Play Again 😏'
    guessBtn.className = 'play-again'
    guessBtn.disabled = false
    guessBtn.style.cursor = 'pointer'
}