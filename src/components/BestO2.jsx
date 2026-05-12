import "../styles/BestO2.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CornerGreenBottomLeft from "../assets/CornerGreenBottomLeft.png";
import CornerGreenTopRight from "../assets/CornerGreenTopRight.png";
import { scrollTo } from "../utils/scrollTo.js";
import { useState } from "react";

const BestO2 = ({
  img,
  title = "We Have Small And Best O2 Plants Collection's",
  descriptions = [
    "Oxygen-producing plants, often referred to as \"O2 plants,\" are those that release oxygen into the atmosphere through the process of photosynthesis.",
    "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  ],
  totalSlides = 4,
}) => {
  const [slidenum, setSlidenum] = useState(1);
  const next = () => setSlidenum((i) => (i === totalSlides ? 1 : i + 1));
  const prev = () => setSlidenum((i) => (i === 1 ? totalSlides : i - 1));

  return (
    <section className="best">
      <div className="besto2wrap">
        <img src={CornerGreenTopRight} alt="" className="cornerFrame cornerTopRight" />
        <h2 className="sectionTitle">Our Best o2</h2>
        <img src={CornerGreenBottomLeft} alt="" className="cornerFrame cornerBottomLeft" />
      </div>

      <div className="bestinner">
        <img src={img} alt="Best O2 Plant" className="bestImg" />

        <div className="bestText">
          <h3>{title}</h3>
          {descriptions.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="bestbtns">
            <button className="exploreBtn" onClick={() => scrollTo("more")}>Explore</button>
            <div className="pagemove">
              <button className="pageBtn" onClick={prev}><FaChevronLeft /></button>
              <span>0{slidenum}/0{ totalSlides }</span>
              <button className="pageBtn" onClick={next}><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2;
