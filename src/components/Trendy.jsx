import "../styles/Trendy.css";
import PL from "../assets/PlantainlLillies.png";
import DP from "../assets/DeskPlant.png";

const Trendy = () => {
  return (
    <section className="trends">
      <h2 className="sectionTitle">Our Trendy plants</h2>

      <div className="trendyplants">
        <img src = { PL } alt="broken img.." className="plantImg" />
        <div className="carddata">
          <h3>For Your Desks Decorations</h3>
          <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <span>Rs. 599/-</span>
          <div className="cardbtns">
            <button className="exploreBtn">Explore</button>
            <button className="cartbtn">🛒</button>
          </div>
        </div>
      </div>

      <div className="trendyplants reverse">
        <img src={ DP } className="plantImg" alt="broken img.."  />
        <div className="carddata">
          <h3>For Your Desks Decorations</h3>
          <p>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
          <span>Rs. 399/-</span>
          <div className="cardbtns">
            <button className="exploreBtn">Explore</button>
            <button className="cartbtn">🛒</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Trendy;
