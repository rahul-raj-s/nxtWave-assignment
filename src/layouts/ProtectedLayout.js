import { Outlet, NavLink } from "react-router-dom";
import { NavBar } from "./shared/NavBar";

export const ProtectedLayoutWithAddOption = () => {
  return (
    <div>
      <NavBar>
        <NavLink to="add-item" className="add-item">
          Add Item
        </NavLink>
      </NavBar>
      <Outlet />
    </div>
  );
};

export const ProtectedLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
