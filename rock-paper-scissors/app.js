const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[randomNum]
    const compChoice = document.querySelector('.p-compChoice');

    compChoice.textContent = computerChoice;


    console.log('computer choice: ' + computerChoice);
    return computerChoice;
}

const gameMap = {
    rock: {
        win: 'scissors',
        lose: 'paper',
        tie: 'rock'
    },
    paper: {
        win: 'rock',
        lose: 'scissors',
        tie: 'paper'
    },
    scissors: {
        win: 'paper',
        lose: 'rock',
        tie: 'scissors'
    },
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    Object.entries(gameMap).forEach(choice => {
        const [_choice, config] = choice;

        const elementClass = `.${_choice}`

        const targetElement = document.querySelector(elementClass)

        targetElement.onclick = () => {
            const computerChoice = getComputerChoice();

            console.log(_choice, config)

            if (config.lose === computerChoice) {
                console.log('lose')
            }
            else if (config.win === computerChoice) {
                console.log('win')
            } else {
                console.log('tie')
            }
        }
    })
    // const playGame = () => {
    //     const rockBtn = document.querySelector('.rock');
    //     const paperBtn = document.querySelector('.paper');
    //     const scissorsBtn = document.querySelector('.scissors');
    //     const compScoreboard = document.querySelector('.p-compScore');
    //     const playerScoreboard = document.querySelector('.p-playerScore');
    //     const winScoreboard = document.querySelector('.p-winnerBoard');


    //     rockBtn.onclick = () => {
    //         const computerChoice = getComputerChoice();
    //         if (computerChoice === 'rock') {

    //             winScoreboard.textContent = 'It\'s a tie';
    //         } else if (computerChoice === 'scissors') {
    //             playerScore++;

    //             winScoreboard.textContent = 'You Win';
    //             console.log('Player Score: ' + playerScore);
    //             playerScoreboard.textContent = playerScore;
    //         } else {

    //             winScoreboard.textContent = 'You Lose';
    //             computerScore++;
    //             console.log('Computer Score: ' + computerScore);
    //             compScoreboard.textContent = computerScore;
    //         }

    //     }

    //     paperBtn.onclick = () => {
    //         const computerChoice = getComputerChoice();
    //         if (computerChoice === 'paper') {

    //             winScoreboard.textContent = 'It\'s a tie';
    //         } else if (computerChoice === 'scissors') {
    //             computerScore++;

    //             winScoreboard.textContent = 'You Lose';
    //             console.log('Computer Score: ' + computerScore);
    //             compScoreboard.textContent = computerScore;
    //         } else {
    //             playerScore++;

    //             console.log('Player Score: ' + playerScore);
    //             playerScoreboard.textContent = playerScore;
    //         }

    //     }

    //     scissorsBtn.onclick = () => {
    //         const computerChoice = getComputerChoice();
    //         if (computerChoice === 'scissors') {

    //             winScoreboard.textContent = 'It\'s a tie';
    //         } else if (computerChoice === 'rock') {
    //             computerScore++;

    //             winScoreboard.textContent = 'You Win';
    //             console.log('Player Score: ' + playerScore);
    //             playerScoreboard.textContent = playerScore;
    //         } else {
    //             computerScore++;

    //             winScoreboard.textContent = 'You Lose';
    //             console.log('Computer Score: ' + computerScore);
    //             compScoreboard.textContent = computerScore;
    //         }

    //     }
    // }
    // playGame();
}


game();


