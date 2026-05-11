import "../styles/BestO2.css";
import AglaonemaPlant from "../assets/AglaonemaPlant.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CornerGreenBottomLeft from "../assets/CornerGreenBottomLeft.png";
import CornerGreenTopRight from "../assets/CornerGreenTopRight.png";

const BestO2 = () => {
  return (
    <section className="best">
      <div className="besto2wrap">
        <img src={CornerGreenTopRight} alt="" className="cornerFrame cornerTopRight" />
        <h2 className="sectionTitle">Our Best o2</h2>
        <img src={CornerGreenBottomLeft} alt="" className="cornerFrame cornerBottomLeft" />
      </div>

      <div className="bestinner">
        <img src={AglaonemaPlant} alt="Best O2 Plant" className="bestImg" />

        <div className="bestText">
          <h3>We Have Small And Best O2 Plants Collection's</h3>
          <p>
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p>
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>

          <div className="bestbtns">
            <button className="exploreBtn">Explore</button>
            <div className="pagemove">
              <button className="pageBtn"><FaChevronLeft /></button>
              <span>01/04</span>
              <button className="pageBtn"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2;
