import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import Container from "../../components/Container";

const Banner = () => {
   return (
      <div className="my-14">
         <Container>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
               <div>
                  <img src={bannerImg1} />
               </div>

               <div>
                  <img src={bannerImg2} />
               </div>

               <div>
                  <img src={bannerImg3} />
               </div>
            </Carousel>
         </Container>
      </div>
   );
};

export default Banner;
