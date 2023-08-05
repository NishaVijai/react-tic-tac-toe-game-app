import { useState } from "react";
import BoardComponent from "./BoardComponent";

export default function GameComponent() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <section className="game">
      <section className="game-board">
        <BoardComponent
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </section>
      <section className="game-info">
        <ol>{moves}</ol>
      </section>
    </section>
  );
}
