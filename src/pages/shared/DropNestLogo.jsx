import React from "react";
import logo from "../../assets/logo.png";

const DropNestLogo = ({ text, textColor, margin }) => {
   return (
      <div className="flex items-end">
         <img src={logo} alt="Image" className="w-[32px]"/>

         <h2
            className={`font-extrabold -ml-3 ${text} ${textColor} ${margin}`}
         >
            DropNest
         </h2>
      </div>
   );
};

export default DropNestLogo;
