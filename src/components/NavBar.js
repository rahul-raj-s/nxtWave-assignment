import { userImg, logoImg } from "../assets";

export const NavBar = ({ children }) => {
  return (
    <nav className="nav">
      <div className="nav_left-section">
        <img src={logoImg} className="small-logo" />
      </div>
      <div className="nav_right-section">
        {children}
        <img src={userImg} className="user-img" />
      </div>
    </nav>
  );
};
