/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Italiana", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ogBlack: "#333333",
        pureWhite: "#ffffff",
        offSand: "c1b7aa",
        classicLeather: "#443933",
        classicGreen: "#3a4842",
        lightGrey: "#dadada",
        mediumGrey: "#a2a2a2",
        primaryGreen: "#147454",
        primaryGold: "#C3A279",
        c1: "#8d6f57",
        c2: "#17777F",
        c3: "#325053",
      },
    },
  },
  plugins: [],
};
