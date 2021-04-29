module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                matisse: {
                    DEFAULT: '#1C7F95',
                    50: '#A8E2EF',
                    100: '#92DBEB',
                    200: '#67CCE3',
                    300: '#3DBEDA',
                    400: '#24A4C0',
                    500: '#1C7F95',
                    600: '#145A6A',
                    700: '#0C363F',
                    800: '#041114',
                    900: '#000000',
                },
            },
            lineHeight: {
                12: "3rem"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}