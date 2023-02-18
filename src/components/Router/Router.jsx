import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import DND5e from "@/layouts/DND5e/DND5e";
import NavigationError from "@/components/NavigationError/NavigationError";
import FATECore from "@/layouts/FATECore/FATECore";
import Help from "@/layouts/Help/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NavigationError />,
  },
  {
    path: "/dnd5e",
    element: <DND5e />,
    errorElement: <NavigationError />,
  },
  {
    path: "/fate-core",
    element: <FATECore />,
    errorElement: <NavigationError />,
  },
  {
    path: "/help",
    element: <Help />,
    errorElement: <NavigationError />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
