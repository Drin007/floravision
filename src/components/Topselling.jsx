import "../styles/Topselling.css";
import AglaonemaPlant from "../assets/AglaonemaPlant.png";
import PlantainlLillies from "../assets/PlantainlLillies.png";
import Cactus from "../assets/Cactus.png";
import SwillCheesePlant from "../assets/SwillCheesePlant.png";
import SansevieriaPlant from "../assets/SansevieriaPlant.png";
import AgavePlant from "../assets/AgavePlant.png";
import corneryellowTopRight from "../assets/corneryellowTopRight.png";
import corneryellowBottomLeft from "../assets/corneryellowBottomLeft.png";
import { LuShoppingBag } from "react-icons/lu";

const Topselling = () => {
  return (
    <section className="topselling">

      <div className="sellWrap">
              <img src={corneryellowTopRight} alt="right corner img" className="cornerFrame cornerTopRight" />
              <h2 className="sectionTitle">Our Top Selling Plants</h2>
              <img src={corneryellowBottomLeft} alt="left corner img" className="cornerFrame cornerBottomLeft" />
      </div>

      <div className="plantsgrid">
        <div className="plantcard">
          <img
            src={AglaonemaPlant}
            alt="Aglaonema plant"
            className="plantCardImg"
          />

          <h4>Aglaonema plant</h4>

          <p>
            The Aglaonema plant, commonly known as Chinese Evergreen known for
            its attractive foliage patterns.
          </p>

          <div className="plantcardBottom">
            <span>Rs. 300/-</span>
            <button><LuShoppingBag /> </button>
          </div>
        </div>

        <div className="plantcard">
          <img
            src={PlantainlLillies}
            alt="Plantain Lilies"
            className="plantCardImg"
          />
          <h4>Plantain Lilies</h4>

          <p>
            Hostas are primarily grown for their lush, decorative leaves, which
            come in a wide variety of sizes.
          </p>

          <div className="plantcardBottom">
            <span>Rs. 380/-</span>
            <button><LuShoppingBag /></button>
          </div>
        </div>

        <div className="plantcard">
          <img src={Cactus} alt="Cactus" className="plantCardImg" />

          <h4>Cactus</h4>

          <p>It is known for their ability to thrive in arid environments.</p>

          <div className="plantcardBottom">
            <span>Rs. 259/-</span>
            <button><LuShoppingBag /></button>
          </div>
        </div>

        <div className="plantcard">
          <img
            src={SwillCheesePlant}
            alt="Swiss cheese Plant"
            className="plantCardImg"
          />

          <h4>Swiss cheese Plant</h4>

          <p>
            It is a popular tropical houseplant known for its distinctive,
            perforated leaves.
          </p>

          <div className="plantcardBottom">
            <span>Rs. 400/-</span>
            <button><LuShoppingBag /></button>
          </div>
        </div>

        <div className="plantcard">
          <img
            src={SansevieriaPlant}
            alt="Sansevieria plant"
            className="plantCardImg"
          />

          <h4>Sansevieria plant</h4>

          <p>
            It is a popular indoor plant admired for its striking appearance and
            low-maintenance nature.
          </p>

          <div className="plantcardBottom">
            <span>Rs. 450/-</span>
            <button><LuShoppingBag /></button>
          </div>
        </div>

        <div className="plantcard">
          <img src={AgavePlant} alt="Agave plant" className="plantCardImg" />

          <h4>Agave plant</h4>

          <p>
            The Agave plant is a genus of succulent plants known for their
            striking rosette of thick, fleshy leaves.
          </p>

          <div className="plantcardBottom">
            <span>Rs. 359/-</span>
            <button><LuShoppingBag /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topselling;
