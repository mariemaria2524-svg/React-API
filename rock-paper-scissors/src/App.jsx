import { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  function playGame(choice) {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("Identical");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win");
    } else {
      setResult("You Lose");
    }
  };

  function resetGame() {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>Rock-Paper-Scissors</h1>

      <div className="buttons">
        <button onClick={() => playGame("Rock")}>Rock </button>
        <button onClick={() => playGame("Paper")}>Paper </button>
        <button onClick={() => playGame("Scissors")}>Scissors </button>
      </div>

      <div className="result">
        <p><strong>My choice:</strong> {userChoice}</p>
        <p><strong>His choice:</strong> {computerChoice}</p>
        <h2>{result}</h2>
      </div>

      <button className="reset" onClick={resetGame}> Reset Game</button>
      
    </div>
  )
};

export default App;
