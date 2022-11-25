import { appState, AppStateColor } from "@/stores/globalStore";
import { useRecoilValue } from "recoil";

export default function BannerMenu() {
    const _app_state = useRecoilValue(appState)

    return (
        <div className="w-full h-12">
            <div className="h-2  rounded-t" data-tauri-drag-region
                 style={ { background: AppStateColor[_app_state] } }/>
            <div className="w-full h-10 bg-b10 border-b-[1px] border-b30 flex flex-row items-center justify-end"
                 data-tauri-drag-region>
                <i className="iconfont icon-burger absolute left-4 text-blue cursor-pointer" style={ { fontSize: 24 } }/>

                <i className="iconfont icon-min mr-4 text-blue cursor-pointer" style={ { fontSize: 24 } }/>
                <i className="iconfont icon-max mr-4 text-blue cursor-pointer" style={ { fontSize: 24 } }/>
                <i className="iconfont icon-power-off mr-4 text-blue cursor-pointer" style={ { fontSize: 24 } }/>
            </div>
        </div>
    )
}