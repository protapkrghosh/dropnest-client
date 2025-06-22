import { FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DropNestLogo from "./DropNestLogo";
import { NavLink } from "react-router";
import Container from "../../components/Container";

const Footer = () => {
   return (
      <Container>
         <div className="pb-14">
            <div className="bg-black py-5 md:py-14 rounded-3xl">
               <footer className="footer footer-horizontal footer-center  text-primary-content p-10">
                  <aside>
                     <DropNestLogo text="text-[32px]" textColor="text-[#fff]" />

                     <p className="text-gray-300 mt-4  md:max-w-[70%] mx-auto leading-6 md:leading-8">
                        Enjoy fast, reaable parcel deavery with real-time
                        tracking and zero hassle. From personal packages to
                        business shipments — we deaver on time, every time.
                     </p>
                  </aside>

                  <nav className="md:flex justify-center gap-5 md:gap-9 text-base text-gray-400 border-y border-dashed border-[#03464D] py-5 md:py-8 w-full">
                     <NavLink
                        to={"/service"}
                        key={"service"}
                        className={"link link-hover"}
                     >
                        Service
                     </NavLink>

                     <NavLink
                        to={"/coverage"}
                        key={"coverage"}
                        className={"link link-hover"}
                     >
                        Coverage
                     </NavLink>

                     <NavLink
                        to={"/about-us"}
                        key={"about-us"}
                        className={"link link-hover"}
                     >
                        About Us
                     </NavLink>

                     <NavLink
                        to={"/pricing"}
                        key={"pricing"}
                        className={"link link-hover"}
                     >
                        Pricing
                     </NavLink>

                     <NavLink
                        to={"/rider"}
                        key={"rider"}
                        className={"link link-hover"}
                     >
                        Be a Rider
                     </NavLink>
                  </nav>

                  <nav>
                     <div className="grid grid-flow-col gap-4">
                        <a
                           href="https://www.linkedin.com"
                           target="_blank"
                           className="footerIcon bg-[#0575B3]"
                        >
                           <FaLinkedinIn size={20} />
                        </a>

                        <a
                           href="https://twitter.com"
                           target="_blank"
                           className="footerIcon bg-[#3a3939]"
                        >
                           <FaXTwitter size={20} />
                        </a>

                        <a
                           href="https://www.facebook.com"
                           target="_blank"
                           className="footerIcon bg-[#006AFF]"
                        >
                           <FaFacebookF size={20} />
                        </a>

                        <a
                           href="https://www.youtube.com"
                           target="_blank"
                           className="footerIcon bg-[#FF0000]"
                        >
                           <FaYoutube size={20} />
                        </a>
                     </div>
                  </nav>
               </footer>
            </div>
         </div>
      </Container>
   );
};

export default Footer;
