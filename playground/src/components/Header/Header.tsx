import { AppBar, IconButton, Typography } from "@mui/material";
import { Link, NavLink } from "react-router";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import NavigationTabs from "./NavigationTabs";

export default function Header() {
  return (
    <AppBar position="static">
      <div className="flex flex-row items-center justify-between py-2 px-3 bg-red-400">
        <NavLink to="/" className="text">
          <PetsOutlinedIcon />
        </NavLink>
        <Typography variant="h6" component="div" className="flex-1 text-center">
          Pet Family
        </Typography>
        <div>
          <IconButton color="inherit" component={Link} to="/profile">
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/login">
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-row items-center px-3 bg-white text-black">
        <NavigationTabs />
      </div>
    </AppBar>
  );
}
