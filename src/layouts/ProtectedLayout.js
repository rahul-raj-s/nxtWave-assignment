import {  Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const ProtectedLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
