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
        <section id="home"><Hero /></section>
        <section id="plants-type"><Trendy /></section>
      </div>
      <section id="more"><Topselling /></section>
      <Customerreview />
      <BestO2 />
      <section id="contact"><Footer /></section>
    </div>
  );
};

export default Home;