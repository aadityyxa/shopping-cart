import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App.jsx'
import Shop from "../pages/shop.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<App />
        }, 
        {
            path:'/products',
            element: <Shop />
        },
        {
            path:"products/:name",
            element:<Shop />
        }
    ])

    return <RouterProvider router={router} />

}

export default Router;