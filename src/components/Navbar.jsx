import "../styles/Navbar.css";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { scrollTo } from "../utils/scrollTo";
import { FaCaretDown } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = ({ img, brand = "FloraVision.", links }) => {
  const navLinks = links || [
    { label: "Home", target: "home" },
    { label: "Plants Type", target: "plants-type", icon: <FaCaretDown /> },
    { label: "More", target: "more" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img} alt="Header Plant's Image" /> {brand}
      </div>

      <ul className="navlinks">
        {navLinks.map(({ label, target, icon }) => (
          <li key={label} onClick={() => scrollTo(target)}>
            {label} {icon}
          </li>
        ))}
      </ul>

      <div className="navIcons">
        <FiSearch className="searchIcon"  onClick = {() => alert("Clicked search bar, backend required")}/>
        <FiShoppingBag className="bagIcon" onClick = {() => {scrollTo("more"); alert("Clicked bag icon, backend required");}}/>
        <BiMenuAltRight className="menuIcon" onClick = {() => alert("Clicked menu icon, not added functionality")}/>
      </div>
    </nav>
  );
};

export default Navbar;
