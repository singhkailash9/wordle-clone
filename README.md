# WORDLE CLONE

A clone of the popular word puzzle game, Wordle, built using HTML, CSS, and JavaScript.

## Functionality

- **Guess Submission**: Users can submit their guesses either by clicking the HTML guess button or by pressing the Enter key on their keyboard.
- **Random Word Selection**: Each game randomly selects a target word from a pool of approximately 480 five-letter English words.
- **Feedback Mechanism**: The game provides immediate visual feedback for each guess:
  - **Correct Letter and Position**: Displayed in green on the grid.
  - **Correct Letter but Wrong Position**: Displayed in yellow.
  - **Incorrect Letter**: Displayed in grey.
- **Attempts Limit**: Players have 6 attempts to guess the word correctly.
- **Win/Lose Notification**: If the player fails to guess the word in 6 tries, the game reveals the answer. If guessed correctly before 6 attempts, the player wins.
- **Replayability**: The game can be played multiple times without any restrictions.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/singhkailash9/wordle-clone.git

2. **Open the Game**:
Open index.html in your preferred web browser to start playing.

## Technologies Used

- HTML: Structures the game interface.
- CSS: Styles the components of the game, ensuring a responsive and user-friendly design.
- JavaScript: Powers the game's logic, including word selection, guess validation, and feedback display.

## Customization

- Word List: The word list can be modified or extended in the wordlist.js file.
- Styling: CSS styles can be altered to fit different themes or preferences.

## Contributing

Contributions to the project are welcome! Feel free to fork the repository and submit pull requests with your enhancements.

## Acknowledgments

- Inspired by the original Wordle game created by Josh Wardle.
- Word list compiled and curated using Python from websites.