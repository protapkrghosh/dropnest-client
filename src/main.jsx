import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
   </StrictMode>
);
