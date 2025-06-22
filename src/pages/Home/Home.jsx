import Banner from "./Banner";
import HowItWork from "./HowItWork";
import OurServices from "./Services/OurServices";
import ClientLogoMarquee from "./ClientLogoMarquee";

const Home = () => {
   return (
      <div>
         <Banner />
         <HowItWork />
         <OurServices />
         <ClientLogoMarquee />
      </div>
   );
};

export default Home;
