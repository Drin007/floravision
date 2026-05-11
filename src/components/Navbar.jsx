import "../styles/Navbar.css";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import HeaderPlant from "../assets/HeaderPlant.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={HeaderPlant} alt="Header Plant's Image" /> FloraVision.
      </div>

      <ul className="navlinks">
        <li>Home</li>
        <li>Plants Type</li>
        <li>More</li>
        <li>Contact</li>
      </ul>

      <div className="navIcons">
        <FiSearch className="searchIcon"/>
        <FiShoppingBag className ="bagIcon"/>
        <FiMenu className="menuIcon"/>
      </div>
    </nav>
  );
};

export default Navbar;