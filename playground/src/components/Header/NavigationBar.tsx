import { NavLink } from "react-router";

export default function NavigationBar() {
  return (
    <div className="flex flex-row items-center py-2 px-3 bg-stone-50 text-black">
      <NavLink to="/game" className="text">
        Play!
      </NavLink>
      <NavLink to="/volunteers" className="text">
        Volunteers
      </NavLink>
      <NavLink to="/profile" className="text">
        Profile
      </NavLink>
    </div>
  );
}
