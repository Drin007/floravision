import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trendy from "../components/Trendy";
import Topselling from "../components/Topselling";
import Customerreview from "../components/Customerreview";
import BestO2 from "../components/BestO2"; 
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main">

      <div className="heroBg">
        <Navbar />
        <Hero />
        <Trendy />
      </div>
      <Topselling />
      <Customerreview />
      <BestO2 /> 
      <Footer />
    </div>
  );
};

export default Home;