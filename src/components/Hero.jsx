import "../styles/Hero.css";
import { FaPlayCircle, FaStar, FaStarHalfAlt, FaChevronRight } from "react-icons/fa";
import AglaonemaPlant from "../assets/AglaonemaPlant.png";
import RonnieHamill from "../assets/RonnieHamill.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="leftpart">

        <div className="textcontent">

          <h1>Earth's Exhale </h1>
          <p>Earth Exhale symbolizes purity and vitality of the Earth's natural environment and it's essential role in sustaining life .</p>

        </div>

        <div className="herobuttons">

          <button className="buybtn">Buy Now</button>
          <button className="demobtn">

            <FaPlayCircle size={48} color="white" /> Live Demo...

          </button>
          
        </div>


        <div className="heroReviewcard">
          <img src={RonnieHamill} alt="Ronnie Hamill" className="pfp" />
          <div>
            <h4>Ronnie Hamill</h4>
            <div className="ratings">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
          </div>
        </div>
      </div>


      <div className="plantcard">

        <img src={AglaonemaPlant} alt="Aglaonema Plant" className="PlantCardImg" />
        <div className="PlantCardInfo">

          <span className="PlantLabel">Indoor Plant</span>

          <h4>Aglaonema plant <FaChevronRight size={20}  className = "arrowIcon" /></h4>
          <button className="PlantBuyBtn">Buy Now</button>
          <div className="PlantDots">

            <span className="slide slideDash"></span>
            <span className="slide"></span>
            <span className="slide"></span>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
