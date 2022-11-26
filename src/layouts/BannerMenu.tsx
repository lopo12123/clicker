import { appState, AppStateColor } from "@/stores/globalStore";
import { useRecoilValue } from "recoil";
import { MouseEvent, useCallback, useState } from "react";
import { Divider, MenuItem, MenuList, Popper } from "@mui/material";

export default function BannerMenu() {
    const currAppState = useRecoilValue(appState)

    // 菜单弹出锚点
    const [ anchor, setAnchor ] = useState<HTMLElement | null>(null)
    // 打开/关闭 菜单
    const handleMenuToggle = useCallback((e: MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : e.currentTarget)
    }, [ anchor ])

    return (
        <div className="w-full h-12">
            <div className="h-2  rounded-t" data-tauri-drag-region
                 style={ { background: AppStateColor[currAppState] } }/>
            <div className="w-full h-10 bg-b10 border-b-[1px] border-b30 flex flex-row items-center justify-end"
                 data-tauri-drag-region>
                <i className="iconfont icon-burger absolute left-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } } onClick={ handleMenuToggle }/>

                <i className="iconfont icon-min mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } }/>
                <i className="iconfont icon-max mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } }/>
                <i className="iconfont icon-power-off mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } }/>
            </div>

            <Popper open={ !!anchor } anchorEl={ anchor } placement="bottom-end">
                <MenuList className="w-40 bg-b10 border-[1px] border-b30" dense>
                    <MenuItem divider>
                        <div>home</div>
                    </MenuItem>
                    <MenuItem divider>
                        <div>setting</div>
                    </MenuItem>
                    <MenuItem>
                        <div>about</div>
                    </MenuItem>
                </MenuList>
            </Popper>
        </div>
    )
}