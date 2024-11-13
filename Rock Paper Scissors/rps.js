const choices = ["rock", "paper", "scissors"];
        let scorePlayer = 0;
        let scoreComputer = 0;

        function getComputerChoice() {
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function checkWinner(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Tie";
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")
            ) {
                return "Player";
            } else {
                return "Computer";
            }
        }

        function playRound(playerSelection) {
            const computerSelection = getComputerChoice();
            const result = checkWinner(playerSelection, computerSelection);

            if (result === "Tie") {
                document.getElementById("message").textContent = `It's a Tie! Both chose ${playerSelection}.`;
            } else if (result === "Player") {
                scorePlayer++;
                document.getElementById("message").textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            } else {
                scoreComputer++;
                document.getElementById("message").textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            }

            updateScore();
            checkGameWinner();
        }

        function updateScore() {
            document.getElementById("score").textContent = `Player: ${scorePlayer} - Computer: ${scoreComputer}`;
        }

        function checkGameWinner() {
            if (scorePlayer === 5) {
                document.getElementById("message").textContent = "Congratulations! You won the game!";
                resetGame();
            } else if (scoreComputer === 5) {
                document.getElementById("message").textContent = "Computer wins the game! Better luck next time.";
                resetGame();
            }
        }

        function resetGame() {
            scorePlayer = 0;
            scoreComputer = 0;
            updateScore();
        }

        document.getElementById("rock").addEventListener("click", () => playRound("rock"));
        document.getElementById("paper").addEventListener("click", () => playRound("paper"));
        document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
