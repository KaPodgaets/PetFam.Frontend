import { AppBar, Button } from "@mui/material";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <AppBar position="static">
      <div className="flex flex-row items-center justify-between py-2 px-3">
        <NavLink to="/" className="text">
          Home
        </NavLink>
        <NavLink to="/game" className="text">
          Play!
        </NavLink>
        <NavLink to="/about" className="text">
          About
        </NavLink>
        <Button color="inherit">Login</Button>
      </div>
    </AppBar>
  );
}
