import Navbar from "../shared/Navbar";
import Catagorycrausal from "./Catagorycrausal";
import Footer from "../shared/Footer";
import HeroSection from "./HeroSection";
import LatestJob from "./LatestJob";


const Home = () => {
  return (
    <>
      <div >
        <Navbar />
        <HeroSection/>
        <Catagorycrausal/>
        <LatestJob/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
