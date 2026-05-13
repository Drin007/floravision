import "../styles/Footer.css";
import { scrollTo } from "../utils/scrollTo";

const Footer = ({
  img,
  brand = "FloraVision.",
  tagline = "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.",
  socials = [
    { label: "FB", url: "https://facebook.com" },
    { label: "TW", url: "https://twitter.com" },
    { label: "LI", url: "https://linkedin.com" },
  ],
  links = [
    { label: "Home", target: "home" },
    { label: "Types Of plants", target: "plants-type" },
    { label: "Contact", target: "contact" },
    { label: "Privacy", target: null },
  ],
  copyright = "FloraVision © all right reserve",
}) => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="brandLogo">
            <img className="footerPlant" src={img} alt={`${brand} logo`} />
            <h3>{brand}</h3>
          </div>

          <p>{tagline}</p>

          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footerlinks">
          <h4>Quick Link's</h4>
          <ul>
            {links.map(({ label, target }) => (
              <li
                key={label} onClick={() => {
                  if (label === "Privacy") {
                    alert("PRIVACY POLICY POP UP");
                  } else if(target) {
                    scrollTo(target);
                  }
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="sendEmail">
          <h4>For Every Update.</h4>
          <div className="sendEmailInput">
            <input type="email" placeholder="Enter Email" />
            <button onClick={() => alert("Submitted")}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
