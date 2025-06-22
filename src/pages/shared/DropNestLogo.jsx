import React from "react";
import logo from "../../assets/logo.png";

const DropNestLogo = ({ textColor, margin }) => {
   return (
      <div className="flex items-end">
         <img src={logo} alt="Image" />
         <h2
            className={`text-[32px] font-extrabold -ml-3 ${textColor} ${margin}`}
         >
            DropNest
         </h2>
      </div>
   );
};

export default DropNestLogo;
