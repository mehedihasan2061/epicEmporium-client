import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddQuery from "../layouts/AddQuery";
import AllQuery from "../Pages/AllQuery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/add-query',
                element:<AddQuery></AddQuery>
            },
            {
                path: '/query',
                element:<AllQuery></AllQuery>
            }
        ]
    }
])

export default router;