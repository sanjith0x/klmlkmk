/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#05070a',
                'accent-blue': '#00ecff',
                'accent-purple': '#9d00ff',
            },
        },
    },
    plugins: [],
}
