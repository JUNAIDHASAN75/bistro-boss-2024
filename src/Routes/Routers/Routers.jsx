import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import SecretFolder from "../../Pages/Shared/SectetFolder/SecretFolder";
import PrivateRoute from "../PrivateRoute";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import MyCart from "../../Pages/DashBoard/MyCart/MyCart";

export  const router = createBrowserRouter([
    {
        path: '',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path: 'secret',
                element:<PrivateRoute> <SecretFolder></SecretFolder></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'cart',
                element:<MyCart></MyCart>
            }
        ]
    }
])