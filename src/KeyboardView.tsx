import Keyboard from "@/components/KeyboardUI/Keyboard";

export default function KeyboardView() {
    return (
        <div className="w-full h-full bg-b05">
            <div className="absolute w-full h-full z-10" data-tauri-drag-region/>
            <Keyboard/>
        </div>
    )
}