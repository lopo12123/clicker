import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Splash from "@/views/Splash";
import SideMenu from "@/layouts/SideMenu";

export default function App() {
    return (
        <div className="w-full h-full bg-b05 flex flex-row items-center justify-between">
            <SideMenu/>

            <div className="flex-1">
                <Suspense fallback={ <Splash/> }>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}
