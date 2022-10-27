import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import Category from "../category/Category";
import Course from "../category/Course";
import Error from "../error/Error";
import Faq from "../faq/Faq";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-website-server-mdnahiankhan.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://learning-website-server-mdnahiankhan.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-website-server-mdnahiankhan.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])