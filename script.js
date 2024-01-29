import WORDS from './wordlist.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');

    const targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    let currentRow = 0;
    let currentColumn = 0;

    window.submitGuess = function() {
        let guess = guessInput.value.toUpperCase();
        if (guess.length === 5) {
            checkGuess(guess);
            guessInput.value = '';
            currentRow++;
            currentColumn = 0;
        } else {
            alert('Guess must be 5 letters');
        }
    };

    window.checkEnterKey = function(event) {
        if (event.key === 'Enter') {
            submitGuess();
        }
    };

    function checkGuess(guess) {
        for (let i = 0; i < 5; i++) {
            let cell = document.getElementById('cell-' + currentRow + '-' + i);
            let letter = guess[i];
            cell.textContent = letter;

            if (targetWord[i] === letter) {
                cell.style.backgroundColor = 'green';
            } else if (targetWord.includes(letter)) {
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = 'gray';
            }
        }

        if (guess === targetWord) {
            setTimeout(() => alert('Congratulations! You guessed right!'), 500);
        } else if (currentRow === 5) {
            setTimeout(() => alert('Game Over! The word was ' + targetWord), 500);
        }
    }
});
