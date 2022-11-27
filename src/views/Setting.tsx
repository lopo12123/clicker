import { useCallback, useEffect } from "react";
import { useNotification } from "@/hooks/useNotification";
import { useNotificationConfig } from "@/stores/notificationStore";

export default function Setting() {
    const [ _, setter ] = useNotificationConfig()
    const noti = useNotification()
    const handleToast = useCallback(() => {
        noti('123', 'warning')
    }, [])

    useEffect(() => {
        setter({
            type: 'app',
            theme: 'dark',
            position: 'top-center'
        })
    }, [])

    return (
        <div className="w-full h-full px-4 text-b90">
            <p><b>设置</b></p>
            <button onClick={ handleToast }>toast</button>
        </div>
    )
}