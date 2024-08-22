import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddQuery from "../layouts/AddQuery";
import AllQuery from "../Pages/AllQuery";
// import SingleProduct from "../components/SingleProduct";
// import MyQueries from "../Pages/MyQueries"
import Update from "../Pages/Update";
// import ProductDetails from "../Pages/ProductDetails";
import MyQueries from "../Pages/MyQueries";
import ProductDetails from "../Pages/ProductDetails";
import MyRecommendation from "../Pages/MyRecommendation"
import RecommendRequest from "../Pages/RecommendRequest";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import QueryDetails from "../Pages/QueryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-query",
        element: (
          <PrivateRoute>
            {" "}
            <AddQuery></AddQuery>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: (
          <PrivateRoute>
            <AllQuery></AllQuery>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/query/:id",
      //   element: <QueryDetails></QueryDetails>,
      //   loader: ({ params }) =>
      //     fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
      // },
      // {
      //   path: "/product/:id",
      //   element: <SingleProduct></SingleProduct>,
      //   loader: () => fetch("http://localhost:5000/products"),
      // },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendation></MyRecommendation>,
      },
      {
        path: "/recommendations",
        element: <RecommendRequest></RecommendRequest>,
      },
      {
        path: "/productQuery/:id",
        element: <QueryDetails></QueryDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/productQuery/${params.id}`),
      },
    ],
  },
]);

export default router;
