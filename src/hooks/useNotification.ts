/**
 * @description 创建系统消息通知
 */
const useNotification_system = (message: string, title: string = '') => {
    return new Promise((resolve, reject) => {
        Notification.requestPermission()
            .then(permission => {
                if(permission === 'granted') {
                    new Notification(title, { body: message })
                    resolve(true)
                }
                else resolve(false)
            })
            .catch(reject)
    })
}

/**
 * @description 创建应用消息通知
 */
const useNotification_app = () => {

}

/**
 * @description 使用通知
 */
const useNotification = () => {

}

export {
    useNotification,
    useNotification_app,
    useNotification_system
}