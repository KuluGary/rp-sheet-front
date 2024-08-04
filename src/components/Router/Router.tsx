import App from "@/App";
import NavigationError from "@/components/NavigationError/NavigationError";
import DND5e from "@/layouts/DND5e/DND5e";
import FATECore from "@/layouts/FATECore/FATECore";
import Help from "@/layouts/Help/Help";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ironsworn from "../../layouts/Ironsworn/Ironsworn";
import KidsOnBikes from "../../layouts/KidsOnBikes/KidsOnBikes";

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
    path: "/kids-on-bikes",
    element: <KidsOnBikes />,
    errorElement: <NavigationError />,
  },
  {
    path: "/ironsworn",
    element: <Ironsworn />,
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
