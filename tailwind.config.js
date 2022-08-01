/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
        'serif': ['Italiana', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'c1': '#8d6f57',
        'c2': '#17777F',
        'c3': '#325053',
      },
    },
  },
  plugins: [],
}