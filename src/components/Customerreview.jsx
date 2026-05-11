import "../styles/Customerreview.css";
import ShellyRussel from "../assets/ShellyRussel.png";
import LulaRolfson from "../assets/LulaRolfson.png";
import CarolHuels from "../assets/CarolHuels.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import corneryellowTopRight from "../assets/corneryellowTopRight.png";
import corneryellowBottomLeft from "../assets/corneryellowBottomLeft.png";

const Customerreview = () => {
  return (
    <section className="reviews">


      <div className="reviewWrap">
        <img src={corneryellowTopRight} alt="" className="cornerFrame cornerTopRight" />
        <h2 className="sectionTitle">Customer Review</h2>
        <img src={corneryellowBottomLeft} alt="" className="cornerFrame cornerBottomLeft" />
      </div>

      <div className="reviewsGrid">

        <div className="reviewCard">
          <div className="reviewerTop">
            <img src={ShellyRussel} alt="Shelly Russel" className="avatar" />
            <div>
              <h4>Shelly Russel</h4>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <p>Just got my hands on some absolutely awesome plants, and I couldn't be happier!</p>
        </div>

        <div className="reviewCard">
          <div className="reviewerTop">
            <img src={LulaRolfson} alt="Lula Rolfson" className="avatar" />
            <div>
              <h4>Lula Rolfson</h4>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <p>Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.</p>
        </div>

        <div className="reviewCard">
          <div className="reviewerTop">
            <img src={CarolHuels} alt="Carol Hueis" className="profilepic" />
            <div>
              <h4>Carol Hueis</h4>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </div>
          <p> It's like bringing a little piece of nature indoors. Definitely worth the investment — my plant collection has never looked better! </p>
        </div>

      </div>
    </section>
  );
};

export default Customerreview;
