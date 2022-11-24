import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Splash from "@/views/Splash";
import BannerMenu from "@/layouts/BannerMenu";

export default function App() {
    return (
        <div className="w-full h-full bg-b05 flex flex-col items-center justify-between">
            <BannerMenu/>

            <div className="w-full flex-1">
                <Suspense fallback={ <Splash/> }>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}
