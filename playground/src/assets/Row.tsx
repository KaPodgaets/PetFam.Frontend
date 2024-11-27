import { useState } from "react";
import Square from "./Square";

export default function Row() {
  const [squareValue, setsquareValue] = useState<string>("");
  function onSquareClick() {
    setsquareValue("X");
  }
  return (
    <div className="row">
      <Square handleClick={onSquareClick} />
      <Square />
      <Square />
    </div>
  );
}
