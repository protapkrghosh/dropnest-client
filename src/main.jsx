import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <div className="font-urbanist bg-base-200">
         <RouterProvider router={router} />
         <Toaster position="top-right" reverseOrder={false} />
      </div>
   </StrictMode>
);
