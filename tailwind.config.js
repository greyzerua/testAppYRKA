/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgSecondary: '#333338',
                bgPrimary: '#1C1D22',
                textPrimary: '#FFFFFF',
                textSecondary: '#CBCBD7',
                textPlaceholder: '#93939F',
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },

        },
    },
    plugins: [],
}
