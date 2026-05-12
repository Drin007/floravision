import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trendy from "../components/Trendy";
import Topselling from "../components/Topselling";
import Customerreview from "../components/Customerreview";
import BestO2 from "../components/BestO2";
import Footer from "../components/Footer";
import HeaderPlant from "../assets/HeaderPlant.png";
import FooterPlant from "../assets/FooterPlant.png";
import AglaonemaPlant from "../assets/AglaonemaPlant.png";
import RonnieHamill from "../assets/RonnieHamill.png";
import ShellyRussel from "../assets/ShellyRussel.png";
import LulaRolfson from "../assets/LulaRolfson.png";
import CarolHuels from "../assets/CarolHuels.png";
import PlantainlLillies from "../assets/PlantainlLillies.png";
import DeskPlant from "../assets/DeskPlant.png";
import Cactus from "../assets/Cactus.png";
import SwillCheesePlant from "../assets/SwillCheesePlant.png";
import SansevieriaPlant from "../assets/SansevieriaPlant.png";
import AgavePlant from "../assets/AgavePlant.png";

const trendyPlants = [
  {
    img: PlantainlLillies,
    title: "For Your Desks Decorations",
    description: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
  },
  {
    img: DeskPlant,
    title: "For Your Desks Decorations",
    description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
  },
];

const topSellingPlants = [
  {
    img: AglaonemaPlant,
    name: "Aglaonema plant",
    description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage patterns.",
    price: "Rs. 300/-",
  },
  {
    img: PlantainlLillies,
    name: "Plantain Lilies",
    description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of sizes.",
    price: "Rs. 380/-",
  },
  {
    img: Cactus,
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments.",
    price: "Rs. 259/-",
  },
  {
    img: SwillCheesePlant,
    name: "Swiss cheese Plant",
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "Rs. 400/-",
  },
  {
    img: SansevieriaPlant,
    name: "Sansevieria plant",
    description: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },
  {
    img: AgavePlant,
    name: "Agave plant",
    description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves.",
    price: "Rs. 359/-",
  },
];

const customerReviews = [
  {
    reviewer: ShellyRussel,
    name: "Shelly Russel",
    rating: 4.5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    reviewer: LulaRolfson,
    name: "Lula Rolfson",
    rating: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    reviewer: CarolHuels,
    name: "Carol Hueis",
    rating: 4,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment — my plant collection has never looked better!",
  },
];

const Home = () => {
  return (
    <div className="main">
      <div className="heroBg">
        <Navbar img={HeaderPlant} />
        <section id="home">
          <Hero
            img={AglaonemaPlant}
            reviewer={RonnieHamill}
          />
        </section>
        <section id="plants-type">
          <Trendy plants={trendyPlants} />
        </section>
      </div>

      <section id="more">
        <Topselling plants={topSellingPlants} />
      </section>

      <Customerreview reviews={customerReviews} />

      <BestO2 img={AglaonemaPlant} />

      <section id="contact">
        <Footer img={FooterPlant} />
      </section>
    </div>
  );
};

export default Home;
