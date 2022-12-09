import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Homepage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;