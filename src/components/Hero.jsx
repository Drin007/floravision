import { useState } from "react";
import "../styles/Hero.css";
import { FaPlayCircle, FaStar, FaStarHalfAlt, FaChevronRight } from "react-icons/fa";
import { scrollTo } from "../utils/scrollTo";

const Hero = ({
  heading = "Earth's Exhale",
  para = "Earth Exhale symbolizes purity and vitality of the Earth's natural environment and it's essential role in sustaining life.",
  img,
  reviewer,
  reviewersName = "Ronnie Hamill",
  reviewText = "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
  plantlabel = "Indoor Plant",
  plantname = "Aglaonema plant",
  halfrate = true,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleArrowClick = () => {
    setActiveSlide((prev) => (prev + 1) % 3);
  };

  return (
    <section className="hero">

      <div className="leftpart">
        <div className="textcontent">
          <h1>{heading}</h1>
          <p>{para}</p>
        </div>

        <div className="herobtns">
          <button className="buybtn" onClick={() => scrollTo("more")}>Buy Now</button>
          <button className="demobtn" onClick={() => scrollTo("plants-type")}>
            <FaPlayCircle size={48} color="white" /> Live Demo...
          </button>
        </div>

        <div className="heroReviewcard">
          <img src={reviewer} alt={reviewersName} className="pfp" />
          <div>
            <h4>{reviewersName}</h4>
            <div className="ratings">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              {halfrate ? <FaStarHalfAlt /> : <FaStar />}
            </div>
            <p>{reviewText}</p>
          </div>
        </div>
      </div>

      <div className="plantcard">
        <img src={img} alt={plantname} className="PlantCardImg" />
        <div className="plantcarddata">
          <span className="PlantLabel">{plantlabel}</span>
          <h4>
            {plantname}
            <FaChevronRight size={20} className="arrowIcon" onClick={handleArrowClick} />
          </h4>
          <button className="PlantBuyBtn" onClick={() => scrollTo("more")}>Buy Now</button>

          <div className="PlantDots">
            { 
              [0, 1, 2].map((i) => (
              <span key={i} className={`slide ${i === activeSlide ? "slideDash" : ""}`} />
            ))
            }
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;