import "../styles/Footer.css";
import FooterPlant from "../assets/FooterPlant.png";
import {scrollTo } from "../utils/scrollTo";

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
        
          <div className="brandLogo">
            <img className="footerPlant" src={FooterPlant} alt="FloraVision's logo" />
            <h3>FloraVision.</h3>
          </div>
          <p>
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
          <div className="socials">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div className="footerLinks">
          <h4>Quick Link's</h4>
          <ul>
            <li onClick = {() => scrollTo("home")}>Home</li>
            <li onClick = {() => scrollTo("plants-type")}>Types Of plants</li>
            <li onClick = {() => scrollTo("contact")}>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="sendEmail">
          <h4>For Every Update.</h4>
          <div className="sendEmailInput">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>FloraVision © all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
