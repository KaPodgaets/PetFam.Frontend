import Board from "./Board.tsx";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[history.length - 1]} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
