/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 2px 0px #000",
      },
      colors: {
        "green": "#4C9F70",
        "red": "#B0413E",
        "black": "#181D27",
        "blue": "#05EDD0",
        "blue-dark": "#3CB6A8",
        "yellow": "#FFF161",
        "yellow-dark": "#FFCD00"
      }
    },
  },
  plugins: [],
}
