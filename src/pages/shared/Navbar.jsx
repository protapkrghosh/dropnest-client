import React from "react";
import { Link, NavLink } from "react-router";
import DropNestLogo from "./DropNestLogo";

const Navbar = () => {
   const navItems = [
      <li key={"service"}>
         <NavLink to={"/service"}>Service</NavLink>
      </li>,
      <li key={"coverage"}>
         <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>,
      <li key={"about-us"}>
         <NavLink to={"/about-us"}>About Us</NavLink>
      </li>,
      <li key={"pricing"}>
         <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>,
      <li key={"rider"}>
         <NavLink to={"/rider"}>Be a Rider</NavLink>
      </li>,
   ];

   return (
      <div className="navbar bg-base-100 shadow-sm">
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

            <Link to={"/"}>
               <DropNestLogo textColor="text-[#303030]" margin="-mb-3" />
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
         </div>
         <div className="navbar-end">
            <a className="btn">Button</a>
         </div>
      </div>
   );
};

export default Navbar;
