import "../styles/Trendy.css";
import { LuShoppingBag } from "react-icons/lu";
import {scrollTo} from "../utils/scrollTo.js";

const TrendyCard = ({ img, title, description, price, reverse = false }) => (
  <div className={`trendyplants${reverse ? " reverse" : ""}`}>
    <img src={img} alt={title} className="plantImg" />
    <div className="carddata">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <div className="cardbtns">
        <button className="exploreBtn" onClick = {() => scrollTo("more")}>Explore</button>
        <button className="cartbtn" onClick = {() => alert("my apologies, YET TO add ADD2CART")}><LuShoppingBag /></button>
      </div>
    </div>
  </div>
);

const Trendy = ({ plants }) => {
  return (
    <section className="trends">
      <h2 className="sectionTitle">Our Trendy plants</h2>
      {plants.map((plant, i) => (
        <TrendyCard key={i} {...plant} reverse={i % 2 !== 0} />
      ))}
    </section>
  );
};

export default Trendy;
