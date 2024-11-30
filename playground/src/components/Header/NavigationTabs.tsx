import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function NavigationTabs() {
  return (
    <div>
      <Tabs value={0} indicatorColor="primary" textColor="inherit" centered>
        <Tab
          icon={<HomeOutlinedIcon />}
          iconPosition="start"
          label="Main"
          component={Link}
          to="/"
        />
        <Tab
          icon={<FavoriteBorderOutlinedIcon />}
          iconPosition="start"
          label="Volunteers"
          component={Link}
          to="/volunteers"
        />
        <Tab
          icon={<VolunteerActivismOutlinedIcon />}
          iconPosition="start"
          label="Help animals"
          component={Link}
          to="/help-animals"
        />
      </Tabs>
    </div>
  );
}
