import "./keyboard.css"

const Layout: { label: string, code: string }[][] = [
    [
        { label: 'ESC', code: 'Escape' },
        { label: 'F1', code: 'F1' },
        { label: 'F2', code: 'F2' },
        { label: 'F3', code: 'F3' },
        { label: 'F4', code: 'F4' },
        { label: 'F5', code: 'F5' },
        { label: 'F6', code: 'F6' },
        { label: 'F7', code: 'F7' },
        { label: 'F8', code: 'F8' },
        { label: 'F9', code: 'F9' },
        { label: 'F10', code: 'F10' },
        { label: 'F11', code: 'F11' },
        { label: 'F12', code: 'F12' }
    ],
    [
        { label: '`', code: 'Backquote' },
        { label: '1', code: 'Digit1' },
        { label: '2', code: 'Digit2' },
        { label: '3', code: 'Digit3' },
        { label: '4', code: 'Digit4' },
        { label: '5', code: 'Digit5' },
        { label: '6', code: 'Digit6' },
        { label: '7', code: 'Digit7' },
        { label: '8', code: 'Digit8' },
        { label: '9', code: 'Digit9' },
        { label: '0', code: 'Digit0' },
        { label: '-', code: 'Minus' },
        { label: '=', code: 'Equal' },
        { label: 'Backspace', code: 'Backspace' }
    ],
    [
        { label: 'Tab', code: 'Tab' },
        { label: 'Q', code: 'KeyQ' },
        { label: 'W', code: 'KeyW' },
        { label: 'E', code: 'KeyE' },
        { label: 'R', code: 'KeyR' },
        { label: 'T', code: 'KeyT' },
        { label: 'Y', code: 'KeyY' },
        { label: 'U', code: 'KeyU' },
        { label: 'I', code: 'KeyI' },
        { label: 'O', code: 'KeyO' },
        { label: 'P', code: 'KeyP' },
        { label: '[', code: 'BracketLeft' },
        { label: ']', code: 'BracketRight' },
        { label: '\\', code: 'Backslash' }
    ],
    [
        { label: 'CapsLock', code: 'CapsLock' },
        { label: 'A', code: 'KeyA' },
        { label: 'S', code: 'KeyS' },
        { label: 'D', code: 'KeyD' },
        { label: 'F', code: 'KeyF' },
        { label: 'G', code: 'KeyG' },
        { label: 'H', code: 'KeyH' },
        { label: 'J', code: 'KeyJ' },
        { label: 'K', code: 'KeyK' },
        { label: 'L', code: 'KeyL' },
        { label: ';', code: 'Semicolon' },
        { label: "'", code: 'Quote' },
        { label: 'Enter', code: 'Enter' }
    ],
    [
        { label: 'Shift', code: 'ShiftLeft' },
        { label: 'Z', code: 'KeyZ' },
        { label: 'X', code: 'KeyX' },
        { label: 'C', code: 'KeyC' },
        { label: 'V', code: 'KeyV' },
        { label: 'B', code: 'KeyB' },
        { label: 'N', code: 'KeyN' },
        { label: 'M', code: 'KeyM' },
        { label: ',', code: 'Comma' },
        { label: '.', code: 'Period' },
        { label: '/', code: 'Slash' },
        { label: 'Shift', code: 'ShiftRight' }
    ],
    [
        { label: 'Ctrl', code: 'ControlLeft' },
        { label: 'Win', code: 'MetaLeft' },
        { label: 'Alt', code: 'AltLeft' },
        { label: 'Space', code: 'Space' },
        { label: 'Alt', code: 'AltRight' },
        { label: 'Win', code: 'MetaRight' },
        { label: 'Menu', code: 'ContextMenu' },
        { label: 'Ctrl', code: 'ControlRight' }
    ]
]

export default function Keyboard() {
    return (
        <div className="keyboard-container">
            {
                Layout.map((row, rowIdx) => {
                    return (
                        <div className="keyboard-row" key={ `row-${ rowIdx }` }>
                            {
                                row.map((key, keyIdx) => {
                                    return <span className="keyboard-cell"
                                                 key={ `key-${ rowIdx }-${ keyIdx }` }>{ key.label }</span>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}