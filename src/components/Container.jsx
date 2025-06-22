import React from "react";

const Container = ({ children }) => {
   return (
      <div className="max-w-[96rem] mx-auto px-2 sm:px-2 md:px-4 xl:px-5 2xl:px-8">
         {children}
      </div>
   );
};

export default Container;
