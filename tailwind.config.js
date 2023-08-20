/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
      fourth: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#27272a',
        seconndary: '#d4d4d8',
        tertiary: '#f59e0b',
        fourth: '#16a34a',
      }
    },
  },
  plugins: [],
}

