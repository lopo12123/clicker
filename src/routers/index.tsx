import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import App from "../App";
import Panic from "../views/Panic";
import { lazy } from "react";

const Welcome = lazy(() => import("@/views/Welcome"))
const Record = lazy(() => import("@/views/Record"))
const Play = lazy(() => import("@/views/Play"))
const Manage = lazy(() => import("@/views/Manage"))
const About = lazy(() => import("@/views/About"))
const Setting = lazy(() => import("@/views/Setting"))

/**
 * @description 路由
 */
export const enum RouteMap {
    // 首页
    Home = '/welcome',
    // 录制
    Record = '/record',
    // 播放
    Play = '/play',
    // 管理
    Manage = '/manage',
    // 设置
    Setting = '/setting',
    // 关于
    About = '/about',
}

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
                path: 'record',
                element: <Record/>,
            },
            {
                path: 'play',
                element: <Play/>,
            },
            {
                path: 'manage',
                element: <Manage/>,
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