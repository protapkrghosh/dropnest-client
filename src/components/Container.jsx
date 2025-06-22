import React from "react";

const Container = ({ children }) => {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-2 md:px-4 xl:px-5 2xl:px-8">
         {children}
      </div>
   );
};

export default Container;
