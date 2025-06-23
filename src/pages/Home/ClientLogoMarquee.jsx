import Marquee from "react-fast-marquee";
import Container from "../../components/Container";
import logo1 from "../../assets/brands/casio.png";
import logo2 from "../../assets/brands/amazon.png";
import logo3 from "../../assets/brands/moonstar.png";
import logo4 from "../../assets/brands/randstad.png";
import logo5 from "../../assets/brands/start-people 1.png";
import logo6 from "../../assets/brands/amazon_vector.png";
import logo7 from "../../assets/brands/start.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogoMarquee = () => {
   return (
      <div className="mb-20">
         <Container>
            <div>
               <h1 className="text-secondary text-[28px] text-center font-extrabold mb-5">
                  We've helped thousands of sales teams
               </h1>

               <div>
                  <Marquee
                     speed={50}
                     gradient={true}
                     gradientColor="#EAECED"
                     pauseOnHover={true}
                     direction="left"
                  >
                     {logos.map((logo, index) => (
                        <div
                           key={index}
                           className="mx-12 flex items-center justify-center"
                        >
                           <img
                              src={logo}
                              alt={`Company Logo ${index + 1}`}
                              className="h-20 w-24 object-contain"
                           />
                        </div>
                     ))}
                  </Marquee>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default ClientLogoMarquee;
