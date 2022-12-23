import { NavLink, Outlet, useLocation } from "react-router-dom";

export const ProtectedLayout = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
};
