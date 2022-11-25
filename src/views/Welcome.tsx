import { useRecoilState } from "recoil";
import { AppState, appState } from "@/stores/globalStore";
import { useCallback } from "react";

export default function Welcome() {
    const [ state, setAppState ] = useRecoilState(appState)

    const handleSetAppState = useCallback((v: AppState) => {
        console.log(v)
        setAppState(_v => v)
    }, [])
    return (
        <div className="w-full h-full bg-b00">
            { state } <br/>
            <button onClick={ () => handleSetAppState('IDLE') }>idle</button>
            <br/>
            <button onClick={ () => handleSetAppState('WORKING') }>working</button>
            <br/>
            <button onClick={ () => handleSetAppState('ERROR') }>error</button>
            <br/>
        </div>
    )
}