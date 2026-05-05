/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colours: {
        'cb-blue': '#1652f0',
        'cb-dark': '#0a0b0d',
        'cb-gray': '#f5f5f5',
        'cb-text': '#050f19',
        'cb-green': '#05b169',
        'cb-red': '#f03131',
      },
      fontFamily: {
        sans: [
          'CoinbaseDisplay',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [],
}