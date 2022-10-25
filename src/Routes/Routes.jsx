import { createBrowserRouter } from "react-router-dom";
import Category from "../category/Category";
import Error from "../error/Error";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '*',
                element: <Error></Error>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])