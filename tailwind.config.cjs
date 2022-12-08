/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        colors: {
            'b00': '#FFFFFF',
            'b05': '#F8F9FA',
            'b10': '#F5F6F7',
            'b20': '#EFF0F1',
            'b30': '#DEE0E3',
            'b40': '#BBBFC4',
            'b50': '#8F959E',
            'b60': '#646A73',
            'b70': '#373C43',
            'b80': '#2B2F36',
            'b90': '#1F2329',
            'b95': '#0F1114',
            'b100': '#000000',
            'yellow': '#D2FA64',
            'green': '#12B571',
            'pink': '#F531B3',
            'red': '#EB0555',
            'blue-light': '#A6B4FF',
            'blue': '#332CF5',
            'blue-dark': '#3225E5',
            'blue-darker': '#00229B'
        },
        fontFamily: {
            'ms': ['ms_sans_serif'],
            'ms_bold': ['ms_sans_serif_bold']
        },
        extend: {},
    },
    plugins: [],
}