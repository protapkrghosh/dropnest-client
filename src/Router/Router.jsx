import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: RootLayout,
      children: [
         {
            index: true,
            Component: Home,
         },
      ],
   },
   {
      path: "/",
      Component: AuthLayout,
      children: [
         {
            path: "login",
            Component: Login,
         },
      ],
   },
]);
