import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import App from "../App";
import Panic from "../views/Panic";
import { lazy } from "react";

const Welcome = lazy(() => import("@/views/Welcome"))
const About = lazy(() => import("@/views/About"))
const Setting = lazy(() => import("@/views/Setting"))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        errorElement: <Panic/>,
        children: [
            {
                path: '',
                loader: () => redirect('welcome')
            },
            {
                path: 'welcome',
                element: <Welcome/>,
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'setting',
                element: <Setting/>
            }
        ]
    },
]

const router = createBrowserRouter(routes)

export {
    router
}