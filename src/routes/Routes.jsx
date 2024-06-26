import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllArts from "../layouts/AllArts/AllArts";
import AddArts from "../layouts/AddArts/AddArts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allArts",
        element: (
          <PrivateRoutes>
            <AllArts></AllArts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addArts",
        element: (
          <PrivateRoutes>
            <AddArts></AddArts>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
