import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil"
import Splash from "@/views/Splash";
import BannerMenu from "@/layouts/BannerMenu";

export default function App() {
    return (
        <RecoilRoot>
            <div className="w-full h-full rounded-lg border border-t-0 border-b30 bg-b10 flex flex-col items-center justify-between overflow-hidden">
                <BannerMenu/>

                <div className="w-full flex-1">
                    <Suspense fallback={ <Splash/> }>
                        <Outlet/>
                    </Suspense>
                </div>
            </div>
        </RecoilRoot>
    )
}
