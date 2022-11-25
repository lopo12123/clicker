import { atom } from "recoil"

// app 状态类型
export type AppState = 'IDLE' | 'WORKING' | 'ERROR'
// app 状态颜色
export const AppStateColor: { [k in AppState]: string } = {
    IDLE: '#332CF5',
    WORKING: '#12B571',
    ERROR: '#EB0555'
}
// app 状态
export const appState = atom<AppState>({
    key: 'app_state',
    default: 'IDLE'
})