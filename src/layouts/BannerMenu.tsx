import { appState, AppStateColor } from "@/stores/globalStore";
import { useRecoilValue } from "recoil";
import { MouseEvent, useCallback, useState } from "react";
import { ClickAwayListener, ListItemIcon, ListItemText, MenuItem, MenuList, Popper } from "@mui/material";
import { appWindow } from "@tauri-apps/api/window";
import { useRouteGuard_AvoidSame } from "@/routers/hooks";
import { RouteMap } from "@/routers";

export default function BannerMenu() {
    const routeGuardAvoidSame = useRouteGuard_AvoidSame()
    const currAppState = useRecoilValue(appState)

    // 菜单弹出锚点
    const [ anchor, setAnchor ] = useState<HTMLElement | null>(null)
    // 打开/关闭 菜单
    const handleMenuToggle = useCallback((e: MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : e.currentTarget)
    }, [ anchor ])

    // 最大最小关闭
    const handleWindowOperates = useCallback((op: 'min' | 'max' | 'close') => {
        switch(op) {
            case 'min':
                appWindow.minimize()
                    .catch(err => {
                        console.log(err)
                    })
                break
            case 'max':
                appWindow.toggleMaximize()
                    .catch(err => {
                        console.log(err)
                    })
                break
            case 'close':
                appWindow.close()
                    .catch(err => {
                        console.log(err)
                    })
                break
        }
    }, [])

    return (
        <div className="w-full h-12" onDoubleClick={ () => handleWindowOperates('max') }>
            <div className="w-full h-2" data-tauri-drag-region
                 style={ { background: AppStateColor[currAppState] } }/>
            <div className="w-full h-10 bg-b10 border-b-[1px] border-b30 flex flex-row items-center justify-end"
                 data-tauri-drag-region>
                <ClickAwayListener onClickAway={ () => setAnchor(null) }>
                    <i className="iconfont icon-burger absolute left-4 text-blue hover:text-red cursor-pointer"
                       style={ { fontSize: 24 } } onClick={ handleMenuToggle }/>
                </ClickAwayListener>

                <i className="iconfont icon-min mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } } onClick={ () => handleWindowOperates('min') }/>
                <i className="iconfont icon-max mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } } onClick={ () => handleWindowOperates('max') }/>
                <i className="iconfont icon-power-off mr-4 text-blue hover:text-red cursor-pointer"
                   style={ { fontSize: 24 } } onClick={ () => handleWindowOperates('close') }/>
            </div>

            <Popper open={ !!anchor } anchorEl={ anchor } placement="bottom-end">
                <MenuList className="w-40 bg-b10 border-[1px] border-b30" dense>
                    <MenuItem divider onClick={ () => routeGuardAvoidSame(RouteMap.Home) }>
                        <ListItemIcon>
                            <i className="iconfont icon-home"/>
                        </ListItemIcon>
                        <ListItemText>主页</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={ () => routeGuardAvoidSame(RouteMap.Record) }>
                        <ListItemIcon>
                            <i className="iconfont icon-record"/>
                        </ListItemIcon>
                        <ListItemText>录制</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={ () => routeGuardAvoidSame(RouteMap.Play) }>
                        <ListItemIcon>
                            <i className="iconfont icon-playing"/>
                        </ListItemIcon>
                        <ListItemText>播放</ListItemText>
                    </MenuItem>
                    <MenuItem divider onClick={ () => routeGuardAvoidSame(RouteMap.Manage) }>
                        <ListItemIcon>
                            <i className="iconfont icon-manage"/>
                        </ListItemIcon>
                        <ListItemText>管理</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={ () => routeGuardAvoidSame(RouteMap.Setting) }>
                        <ListItemIcon>
                            <i className="iconfont icon-setting"/>
                        </ListItemIcon>
                        <ListItemText>设置</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={ () => routeGuardAvoidSame(RouteMap.About) }>
                        <ListItemIcon>
                            <i className="iconfont icon-info"/>
                        </ListItemIcon>
                        <ListItemText>关于</ListItemText>
                    </MenuItem>
                </MenuList>
            </Popper>
        </div>
    )
}