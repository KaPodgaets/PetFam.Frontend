import { useState } from "react";
import "./App.css";
import Square from "./assets/Square";

function App() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onSquareClick(i: number) {
    if (squares[i]) return;

    const newArray = squares.slice();
    if (xIsNext) {
      newArray[i] = "X";
    } else {
      newArray[i] = "O";
    }

    setSquares(newArray);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board">
        <div className="row">
          <Square value={squares[0]} handleClick={() => onSquareClick(0)} />
          <Square value={squares[1]} handleClick={() => onSquareClick(1)} />
          <Square value={squares[2]} handleClick={() => onSquareClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} handleClick={() => onSquareClick(3)} />
          <Square value={squares[4]} handleClick={() => onSquareClick(4)} />
          <Square value={squares[5]} handleClick={() => onSquareClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} handleClick={() => onSquareClick(6)} />
          <Square value={squares[7]} handleClick={() => onSquareClick(7)} />
          <Square value={squares[8]} handleClick={() => onSquareClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
