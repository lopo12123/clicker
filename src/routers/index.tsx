import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: '/',
    }
]

const router = createBrowserRouter(routes)

export {
    router
}