import Square from "./Square";

type Props = {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquares: string[]) => void;
};

export default function Board({ xIsNext, squares, onPlay }: Props) {
  function onSquareClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;

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
    <div>
      <div className="border-sky-100">{status}</div>
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
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
