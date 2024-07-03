import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllArts from "../layouts/AllArts/AllArts";
import AddArts from "../layouts/AddArts/AddArts";
import ArtDetails from "../layouts/ArtDetails/ArtDetails";
import Home from "../layouts/Home/Home";
import MyArts from "../layouts/MyArts/MyArts";
import NotFound from "../layouts/NotFound/NotFound";
import CategoryItems from "../layouts/CategoyItems/CategoryItems";
import UpdateArt from "../layouts/UpdateArt/UpdateArt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
        path: "/categoryItems/:category",
        element: (
          <PrivateRoutes>
            <CategoryItems></CategoryItems>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.category}`),
      },
      {
        path: "/myArts",
        element: (
          <PrivateRoutes>
            <MyArts></MyArts>
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
        path: "/updateArt",
        element: (
          <PrivateRoutes>
            <UpdateArt></UpdateArt>
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
