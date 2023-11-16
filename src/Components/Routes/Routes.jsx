import { createBrowserRouter } from "react-router-dom";
import Booking from "../pages/Booking/Booking";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import Home from "../pages/Home/Home";
import DestinationDetails from "../pages/DestinationDetails/DestinationDetails";
import HomeLayout from "../Layout/HomeLayout";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About";
import ErrorElement from "../ErrorElement/ErrorElement";


const route = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/booking/:id',
                element: <Booking/>,
                loader : ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/destination/${params.id}`)
            },
            {
                path : '/about',
                element: <About/>
            }
        ]
    },
    {
        path: 'destination',
        element: <MainLayout />,
        children: [
            {
                path: '/destination/:id',
                element: <DestinationDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/destination/${params.id}`)
            },
 
        ]

    },
    {
        path: 'login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path : '*',
        element : <ErrorElement/>
    }

]);

export default route;