export const checkWinner = (userChoice, computerChoice, currentValue) => {
    console.log(currentValue)
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            localStorage.setItem('score', currentValue-1)
            return "Computer wins!";
        } else {
            localStorage.setItem('score', currentValue+1)
            return "You won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            localStorage.setItem('score', currentValue-1)
            return "Computer wins!";
        } else {
            localStorage.setItem('score', currentValue+1)
            return "You won!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            localStorage.setItem('score', currentValue-1)
            return "Computer wins!";
        } else {
            localStorage.setItem('score', currentValue+1)
            return "You won!";
        }
    } else {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }
}