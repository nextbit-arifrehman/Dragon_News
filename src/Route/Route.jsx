import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";


const router =createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout ,

        children:[
            {
                path:'',
                Component: Home
            },
            {
                path:'category/:id',
                Component: CatagoryNews ,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <span className="loading loading-bars loading-lg"></span>
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>auth Layout</h2>
    },
    {
        path:'/news',
        element: <h2>News Layout</h2>
    }
  ,
    {
        path:'/*',
        element: <h2>Error 404</h2>
    }
]);

export default router;