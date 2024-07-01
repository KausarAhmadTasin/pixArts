import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllArts from "../layouts/AllArts/AllArts";
import AddArts from "../layouts/AddArts/AddArts";
import ArtDetails from "../layouts/ArtDetails/ArtDetails";
import Home from "../layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/artDetails/:id",
        element: (
          <PrivateRoutes>
            <ArtDetails></ArtDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/arts/${params.id}`),
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
