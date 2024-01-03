import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import { Navbar } from "../components/Navbar/Navbar";
import { LandingPage } from "../components/landingpage/LandingPage";
// import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            // {
            //     path: '/login',
            //     element: <Login />,
            // },
            {
                path: '/signup',
                element: <Signup />,
            },

        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div >
            
            <Navbar />
            <Outlet />
        </div>

    )
}
export default Router