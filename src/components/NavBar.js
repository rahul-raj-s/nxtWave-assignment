import { Button } from "./Button";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_left-section">
        <span>nxt Wave</span>
      </div>
      <div className="nav_right-section">
        <Button >Add Item</Button>
        <div>User</div>
      </div>
    </nav>
  );
};
