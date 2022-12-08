import { useCallback } from "react";
import { useNotification } from "@/hooks/useNotification";
import { useNotificationConfig } from "@/stores/notificationStore";
import { Divider, MenuItem, Select } from "@mui/material";
import { LogicalSize, WebviewWindow } from "@tauri-apps/api/window"

export default function Setting() {
    const notification = useNotification()
    const [ notificationConfig, setNotificationConfig ] = useNotificationConfig()

    const handleNotificationTest = useCallback(() => {
        notification('提示消息测试')
    }, [ notification ])

    const handleKeyboardTest = useCallback(() => {
        const win = new WebviewWindow('keyboard', { width: 800, height: 300 })
        win.show()
    }, [])

    return (
        <div className="w-full h-full px-4 text-b90">
            <p>
                <b>提示设置</b>
                <span className="ml-4 text-sm text-b60 cursor-pointer"
                      onClick={ handleNotificationTest }>
                    <i className="iconfont icon-pointer"/>点此测试
                </span>
            </p>
            <div className="my-2">
                <span className="mr-4 text-b60">提示类型</span>
                <Select
                    sx={ { fontSize: '14px' } }
                    value={ notificationConfig.behavior } size="small"
                    onChange={ (ev) => setNotificationConfig(v => ({
                        ...v,
                        behavior: ev.target.value as 'sys' | 'app'
                    })) }>
                    <MenuItem value="sys" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-system mr-2"/>系统
                    </MenuItem>
                    <MenuItem value="app" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-application mr-2"/>应用
                    </MenuItem>
                </Select>
            </div>
            <div className="my-2">
                <span className="mr-4 text-b60">提示风格</span>
                <Select
                    sx={ { fontSize: '14px' } }
                    value={ notificationConfig.theme } size="small"
                    onChange={ (ev) => setNotificationConfig(v => ({
                        ...v,
                        theme: ev.target.value as 'light' | 'dark'
                    })) }>
                    <MenuItem value="light" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-light mr-2"/>明亮
                    </MenuItem>
                    <MenuItem value="dark" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-dark mr-2"/>暗黑
                    </MenuItem>
                </Select>
            </div>
            <div className="my-2">
                <span className="mr-4 text-b60">提示位置</span>
                <Select
                    sx={ { fontSize: '14px' } }
                    value={ notificationConfig.position } size="small"
                    onChange={ (ev) => setNotificationConfig(v => ({
                        ...v,
                        position: ev.target.value as any
                    })) }>
                    <MenuItem value="top-left" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-top-left mr-2"/>上左
                    </MenuItem>
                    <MenuItem value="top-center" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-top mr-2"/>上中
                    </MenuItem>
                    <MenuItem value="top-right" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-top-right mr-2"/>上右
                    </MenuItem>
                    <MenuItem value="bottom-left" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-bottom-left mr-2"/>下左
                    </MenuItem>
                    <MenuItem value="bottom-center" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-bottom mr-2"/>下中
                    </MenuItem>
                    <MenuItem value="bottom-right" sx={ { fontSize: '14px' } }>
                        <i className="iconfont icon-bottom-right mr-2"/>下右
                    </MenuItem>
                </Select>
            </div>
            <Divider sx={ { marginY: '8px' } }/>

            <p>
                <b>按键设置</b>
                <span className="ml-4 text-sm text-b60 cursor-pointer"
                      onClick={ handleKeyboardTest }>
                    <i className="iconfont icon-pointer"/>按键检测
                </span>
            </p>
            <div className="my-2">
                123
            </div>
        </div>
    )
}