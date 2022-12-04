import "./keyboard.css"

const Layout = [
    [ 'ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12' ],
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace' ],
    [ 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\' ],
    [ 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter' ],
    [ 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', '/', 'Shift' ],
    [ 'Ctrl', 'Win', 'Alt', 'Blank', 'Alt', 'Win', 'Menu', 'Ctrl' ]
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
                                                 key={ `key-${ rowIdx }-${ keyIdx }` }>{ key }</span>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}