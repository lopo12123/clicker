import { toast } from 'react-toastify';
import { useNotificationConfig } from "@/stores/notificationStore";

const NotificationTitleMap = {
    info: '提示',
    success: '成功',
    warning: '警告',
    error: '出错',
    default: ''
}

/**
 * @description 创建系统消息通知
 */
const useNotification_system = () => {
    return (message: string, type: 'info' | 'success' | 'warning' | 'error' | 'default' = 'default') => {
        return new Promise<boolean>((resolve, reject) => {
            Notification.requestPermission()
                .then(permission => {
                    if(permission === 'granted') {
                        new Notification(NotificationTitleMap[type], { body: message })
                        resolve(true)
                    }
                    else resolve(false)
                })
                .catch(reject)
        })
    }
}

/**
 * @description 创建应用内消息通知
 */
const useNotification_app = () => {
    const [ config ] = useNotificationConfig()
    return (message: string, type: 'info' | 'success' | 'warning' | 'error' | 'default' = 'default') => {
        toast(message, {
            type,
            theme: config.theme,
            position: config.position,
            closeOnClick: true,
            pauseOnFocusLoss: false
        })
    }
}

/**
 * @description 使用通知
 */
const useNotification = (): (message: string, type?: ("info" | "success" | "warning" | "error" | "default")) => void => {
    const [ config ] = useNotificationConfig()
    if(config.type === 'system') return useNotification_system()
    else return useNotification_app()
}

export {
    useNotification,
    useNotification_app,
    useNotification_system
}