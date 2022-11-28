export const AvailableKey = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'Esc', '~', 'Tab', 'Caps Lock', 'Shift',
    'Ctrl/Control', 'Win/Command', 'Alt/Option',
    'Space', 'Enter', 'Backspace', 'Delete'
] as const

export type HotkeyConfig = {
    end: typeof AvailableKey[number]
}