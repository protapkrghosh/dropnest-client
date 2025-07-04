import { Link, Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import DropNestLogo from "../pages/shared/DropNestLogo";
import Container from "../components/Container";

const AuthLayout = () => {
   return (
      <div>
         <Container>
            <div className="md:flex justify-between min-h-[90vh] xl:min-h-screen 2xl:min-h-[70vh]">
               <div className="flex-1/2">
                  <div className="pt-11 w-fit">
                     <Link to={"/"}>
                        <DropNestLogo
                           text="text-[28px]"
                           textColor="text-[#303030]"
                           margin="-mb-3"
                        />
                     </Link>
                  </div>

                  <div className="max-w-sm mx-auto mt-14">
                     <Outlet />
                  </div>
               </div>

               <div className="bg-[#FAFDF0] flex flex-1/2 items-center justify-center">
                  <img src={authImg} className="w-auto" />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default AuthLayout;
