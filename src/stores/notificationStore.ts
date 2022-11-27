import { atom, useRecoilState } from "recoil";

export type NotificationConfig = {
    // 系统 / 应用内
    type: 'system' | 'app'
    position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    theme: 'dark' | 'light'
}

let defaultConfig: NotificationConfig = {
    type: 'system',
    position: 'top-right',
    theme: 'light'
}
const storedConfig = localStorage.getItem('notification-config')
if(storedConfig) {
    try {
        defaultConfig = JSON.parse(storedConfig)
    }
    catch (e) {

    }
}
const config = atom<NotificationConfig>({
    key: 'notification-config',
    default: defaultConfig
})

const useNotificationConfig = (): [ NotificationConfig, (vOrF: (((curr: NotificationConfig) => NotificationConfig) | NotificationConfig)) => void ] => {
    const [ val, setter ] = useRecoilState(config)

    const setterSync = (vOrF: ((curr: NotificationConfig) => NotificationConfig) | NotificationConfig) => {
        setter(prev => {
            if(typeof vOrF === 'function') {
                const newVal = vOrF(prev)
                localStorage.setItem('notification-config', JSON.stringify(newVal))
                return newVal
            }
            else {
                localStorage.setItem('notification-config', JSON.stringify(vOrF))
                return vOrF
            }
        })
    }

    return [ val, setterSync ]
}

export {
    useNotificationConfig
}