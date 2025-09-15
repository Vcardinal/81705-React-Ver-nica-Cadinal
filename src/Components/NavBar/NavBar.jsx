import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <h1 className="logo">Delicakes 🧁</h1>
      
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/cakes" className={({ isActive }) => isActive ? "active" : ""}>
              Cakes
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/mini" className={({ isActive }) => isActive ? "active" : ""}>
              Mini Pastelería
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/cookies" className={({ isActive }) => isActive ? "active" : ""}>
              Cookies
            </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;





