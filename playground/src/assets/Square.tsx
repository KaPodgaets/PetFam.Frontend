import { useState } from "react";
// type Props = {
//   value: string;
// };
export default function Square() {
  function handleClick() {
    setValue("X");
  }

  const [value, setValue] = useState("");

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
