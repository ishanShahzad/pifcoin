import SwiperSlider from "../../components/slider/SwiperSlider";
import Whitepaper from "./components/Whitepaper";
import Charitymarketplace from "./components/CharityMarketPlace";
import MarketRelation from "./components/MarketRelation";
const LandingModule = () => {
  return (
    <div className="">
      <SwiperSlider slide="feature" />
      <div className="bg-black">
        <Whitepaper />
      </div>
     
      <Charitymarketplace />
      <MarketRelation />
    </div>
  );
};

export default LandingModule;
