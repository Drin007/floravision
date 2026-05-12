import "../styles/Topselling.css";
import corneryellowTopRight from "../assets/corneryellowTopRight.png";
import corneryellowBottomLeft from "../assets/corneryellowBottomLeft.png";
import { LuShoppingBag } from "react-icons/lu";

const PlantCard = ({ img, name, description, price }) => (
  <div className="plantcard">
    <img src={img} alt={name} className="plantCardImg" />
    <h4>{name}</h4>
    <p>{description}</p>
    <div className="plantcardBottom">
      <span>{price}</span>
      <button onClick={() => alert("My apologies :) , I have yet to add Add2CART funtionality")}>
        <LuShoppingBag />
      </button>
    </div>
  </div>
);

const Topselling = ({ plants }) => {
  return (
    <section className="topselling">
      <div className="sellWrap">
        <img src={corneryellowTopRight} alt="" className="cornerFrame cornerTopRight" />
        <h2 className="sectionTitle">Our Top Selling Plants</h2>
        <img src={corneryellowBottomLeft} alt="" className="cornerFrame cornerBottomLeft" />
      </div>

      <div className="plantsgrid">
        {plants.map((plant, i) => (
          <PlantCard key={i} {...plant} />
        ))}
      </div>
    </section>
  );
};

export default Topselling;
