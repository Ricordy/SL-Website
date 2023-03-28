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
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
        serif: ["Italiana", ...defaultTheme.fontFamily.serif],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ogBlack: "#535955",
        dreamBlack: "#011013",
        pureWhite: "#ffffff",
        offSand: "c1b7aa",
        classicLeather: "#443933",
        classicGreen: "#3a4842",
        lightGrey: "#dadada",
        mediumGrey: "#a2a2a2",
        primaryGreen: "#147454",
        primaryGold: "#C3A279",
        primaryGrey: "#757C79",
        progressHighlight: "#2BDA9F",
        progressBackground: "#DCDCDC",
        contactBackground: "#F7F7F7",
        tabInactive: "#757C79",
      },
    },
  },
  plugins: [],
};
