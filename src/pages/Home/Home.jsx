import Banner from "./Banner";
import HowItWork from "./HowItWork";
import OurServices from "./Services/OurServices";
import ClientLogoMarquee from "./ClientLogoMarquee";
import Benefits from "./Benefits";
import BeMerchant from "./BeMerchant";

const Home = () => {
   return (
      <div className="bg-base-200">
         <Banner />
         <HowItWork />
         <OurServices />
         <ClientLogoMarquee />
         <Benefits />
         <BeMerchant />
      </div>
   );
};

export default Home;
