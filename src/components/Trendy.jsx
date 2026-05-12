import "../styles/Trendy.css";
import { LuShoppingBag } from "react-icons/lu";

const TrendyCard = ({ img, title, description, price, reverse = false }) => (
  <div className={`trendyplants${reverse ? " reverse" : ""}`}>
    <img src={img} alt={title} className="plantImg" />
    <div className="carddata">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <div className="cardbtns">
        <button className="exploreBtn">Explore</button>
        <button className="cartbtn"><LuShoppingBag /></button>
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
