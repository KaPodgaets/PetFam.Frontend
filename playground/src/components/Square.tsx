import { Button } from "@mui/material";

type Props = {
  value: string;
  handleClick: () => void;
};
export default function Square({ value, handleClick }: Props) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
