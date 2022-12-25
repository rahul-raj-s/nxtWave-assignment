import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_left-section">
        <span>nxt Wave</span>
      </div>
      <div className="nav_right-section">
        <NavLink to="add-item">Add Item</NavLink>
        <div>User</div>
      </div>
    </nav>
  );
};
