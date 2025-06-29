import React from "react";
import { Link, NavLink } from "react-router";
import DropNestLogo from "./DropNestLogo";
import Container from "../../components/Container";

const Navbar = () => {
   const navItems = [
      <li key={"service"}>
         <NavLink to={"/service"} className={"navHover"}>
            Service
         </NavLink>
      </li>,
      <li key={"coverage"}>
         <NavLink to={"/coverage"} className={"navHover"}>
            Coverage
         </NavLink>
      </li>,
      <li key={"about-us"}>
         <NavLink to={"/about-us"} className={"navHover"}>
            About Us
         </NavLink>
      </li>,
      <li key={"pricing"}>
         <NavLink to={"/pricing"} className={"navHover"}>
            Pricing
         </NavLink>
      </li>,
      <li key={"rider"}>
         <NavLink to={"/rider"} className={"navHover"}>
            Be a Rider
         </NavLink>
      </li>,
   ];

   return (
      <div className="sticky -top-8 z-50">
         <Container>
            <div className="pt-8">
               <div className="bg-white shadow-sm rounded-2xl px-8">
                  <div className="navbar py-4">
                     <div className="navbar-start">
                        <div className="dropdown">
                           <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost lg:hidden"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 {" "}
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                 />{" "}
                              </svg>
                           </div>
                           <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                           >
                              {navItems}
                           </ul>
                        </div>

                        <div className="-mt-2">
                           <Link to={"/"}>
                              <DropNestLogo
                                 text="text-[28px]"
                                 textColor="text-[#303030]"
                                 margin="-mb-3"
                              />
                           </Link>
                        </div>
                     </div>

                     <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base">
                           {navItems}
                        </ul>
                     </div>
                     <div className="navbar-end">
                        <a className="btn text-secondary font-bold border border-gray-300 bg-white hover:bg-primary rounded-lg duration-300">
                           Sign In
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Navbar;
