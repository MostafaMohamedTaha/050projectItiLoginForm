/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    screens:{
      'xsm':'350px',
      'sm':'640px',
      'md':'840px',
      'lg':'1920px',
    },
    extend: {},
  },
  plugins: [],
}
