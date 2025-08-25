import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="brand">Delicakes</h2>
      <ul className="menu">
        <li>Cakes</li>
        <li>Mini Pastelería</li>
        <li>Cookies</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;





