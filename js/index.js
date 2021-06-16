//game values
let min = 0,
    max = 20,
    winningNumber = 10,
    guessesLeft = 3;

// ui elements
const game = document.querySelector('.content'),
       minNum = document.querySelector('.min'),
       maxNum = document.querySelector('.max'),
       guessBtn = document.querySelector('.btn'),
       guessInput = document.querySelector('.input');
       message = document.querySelector('.message');

// assign min and max number
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
        console.log(guess);
    // validate
    if(isNaN(guess) || guess < min || guess > max){
       setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }

    //check if its the correct number
    if(guess === winningNumber){
        // game over --- won
    guessInput.disabled = true;
    guessBtn.disabled = true;
    winningMessage(`${winningNumber} is the correct answer! YOU WIN!🎊🎉`, 'green')
    guessInput.style.borderColor = 'green'
    }
    else{
     guessesLeft -= 1
     if(guessesLeft === 0){
         // game over --- lost
         guessBtn.disabled = true
         guessInput.disabled = true;
         winningMessage(`Game Over! YOU LOST. the correct number was ${winningNumber}`, 'red')
         guessInput.style.borderColor = 'red'
         
     }
     else{
         ///game continues ---  answer wrong
         setMessage(`Try Again😪\nYou have ${guessesLeft} guesses left!`, 'red')
     }

    }

});
// game over
// function gameOver(won, msg){
//     let color;
//     won === true ? color = 'green' : color = 'red';
//     guessBtn.disabled = true
//     guessInput.disabled = true;
//     guessInput.style.borderColor = color
//     message.style.color = color;
// }
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

