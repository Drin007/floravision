import "../styles/Navbar.css";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import HeaderPlant from "../assets/HeaderPlant.png";
import {scrollTo } from "../utils/scrollTo";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={HeaderPlant} alt="Header Plant's Image" /> FloraVision.
      </div>

      <ul className="navlinks">
        <li onClick = {() => scrollTo("home")}>Home</li>
        <li onClick = {()=> scrollTo("plants-type")}>Plants Type</li>
        <li onClick = {() => scrollTo("more")}>More</li>
        <li onClick = {() => scrollTo("contact") } >Contact</li>
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