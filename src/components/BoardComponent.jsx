import calculateWinner from "../calculateWinner";
import SectionComponent from "./SectionComponent";
import SquareComponent from "./SquareComponent";
import StatusComponent from "./StatusComponent";

export default function BoardComponent({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <StatusComponent status={status} />
      <SectionComponent sectionClassName="board-row">
        <SquareComponent
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <SquareComponent
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <SquareComponent
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </SectionComponent>

      <SectionComponent sectionClassName="board-row">
        <SquareComponent
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <SquareComponent
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <SquareComponent
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </SectionComponent>

      <SectionComponent sectionClassName="board-row">
        <SquareComponent
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <SquareComponent
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <SquareComponent
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </SectionComponent>
    </>
  );
}
